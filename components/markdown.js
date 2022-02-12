import dynamic from 'next/dynamic';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter').then((mod) => mod.PrismAsyncLight), {
  ssr: false,
});
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Markdown({ text }) {
  const components = {
    a({ children, href }) {
      return href.startsWith('/') ? (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    },
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter style={tomorrow} language={match[1]} PreTag="div" {...props}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown components={components} className="kvn-markdown">
      {text}
    </ReactMarkdown>
  );
}
