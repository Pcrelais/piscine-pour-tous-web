import ReactMarkdown from 'react-markdown';

interface RichTextViewerProps {
  content: string;
  className?: string;
}

const RichTextViewer = ({ content, className = "" }: RichTextViewerProps) => {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default RichTextViewer;
