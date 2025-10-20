-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  color TEXT DEFAULT '#00AEEF',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Everyone can view categories
CREATE POLICY "Anyone can view categories"
ON public.categories
FOR SELECT
TO public
USING (true);

-- Only authenticated users can create categories
CREATE POLICY "Authenticated users can create categories"
ON public.categories
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Only authenticated users can update categories
CREATE POLICY "Authenticated users can update categories"
ON public.categories
FOR UPDATE
TO authenticated
USING (true);

-- Only authenticated users can delete categories
CREATE POLICY "Authenticated users can delete categories"
ON public.categories
FOR DELETE
TO authenticated
USING (true);

-- Add trigger for updated_at
CREATE TRIGGER update_categories_updated_at
BEFORE UPDATE ON public.categories
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Insert default categories
INSERT INTO public.categories (name, slug, description, color) VALUES
  ('Entretien', 'entretien', 'Conseils d''entretien de piscine', '#00AEEF'),
  ('Construction', 'construction', 'Construction et installation de piscines', '#004E7C'),
  ('Rénovation', 'renovation', 'Rénovation de piscines existantes', '#0095CC'),
  ('Équipement', 'equipement', 'Équipements et accessoires', '#00C4E0'),
  ('Conseils', 'conseils', 'Conseils et astuces', '#6EC1E4'),
  ('Actualités', 'actualites', 'Actualités du secteur', '#A8DFF0')
ON CONFLICT (slug) DO NOTHING;