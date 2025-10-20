interface RichTextViewerProps {
  content: string;
  className?: string;
}

const RichTextViewer = ({ content, className = "" }: RichTextViewerProps) => {
  return (
    <div 
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichTextViewer;
