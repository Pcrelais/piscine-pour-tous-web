-- Add new columns to blog_posts table
ALTER TABLE public.blog_posts
  ADD COLUMN IF NOT EXISTS slug text UNIQUE,
  ADD COLUMN IF NOT EXISTS cover_image text,
  ADD COLUMN IF NOT EXISTS category text,
  ADD COLUMN IF NOT EXISTS read_time integer DEFAULT 5,
  ADD COLUMN IF NOT EXISTS views integer DEFAULT 0;

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);

-- Create index on category
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON public.blog_posts(category);

-- Function to generate slug from title
CREATE OR REPLACE FUNCTION public.generate_slug(p_title text)
RETURNS text AS $$
DECLARE
  v_slug text;
  v_counter integer := 0;
  v_base_slug text;
BEGIN
  -- Convert to lowercase, replace spaces with hyphens, remove special chars
  v_base_slug := lower(regexp_replace(
    regexp_replace(p_title, '[éèêë]', 'e', 'g'),
    '[^a-z0-9]+', '-', 'g'
  ));
  
  -- Remove leading/trailing hyphens
  v_base_slug := trim(both '-' from v_base_slug);
  
  v_slug := v_base_slug;
  
  -- Check if slug exists, if so append number
  WHILE EXISTS (SELECT 1 FROM public.blog_posts WHERE slug = v_slug) LOOP
    v_counter := v_counter + 1;
    v_slug := v_base_slug || '-' || v_counter;
  END LOOP;
  
  RETURN v_slug;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger to auto-generate slug if not provided
CREATE OR REPLACE FUNCTION public.set_blog_post_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := public.generate_slug(NEW.title);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER trigger_set_blog_post_slug
  BEFORE INSERT OR UPDATE OF title ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.set_blog_post_slug();

-- Update existing posts to have slugs
UPDATE public.blog_posts
SET slug = public.generate_slug(title)
WHERE slug IS NULL;