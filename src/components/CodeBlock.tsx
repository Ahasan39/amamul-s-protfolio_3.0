import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageLabel = (lang: string) => {
    const labels: Record<string, string> = {
      php: 'PHP',
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      vue: 'Vue.js',
      jsx: 'JSX',
      tsx: 'TSX',
      bash: 'Bash',
      css: 'CSS',
      html: 'HTML',
      sql: 'SQL',
    };
    return labels[lang.toLowerCase()] || lang.toUpperCase();
  };

  return (
    <div className="relative group my-6 rounded-xl overflow-hidden border border-border bg-muted/50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/80">
        <span className="text-xs font-medium text-muted-foreground">
          {getLanguageLabel(language)}
        </span>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-all",
            copied 
              ? "text-green-500 bg-green-500/10" 
              : "text-muted-foreground hover:text-foreground hover:bg-accent"
          )}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      
      {/* Code */}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground/90 leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  );
};
