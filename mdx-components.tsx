import type { MDXComponents } from 'mdx/types'
import { ReactNode } from 'react'

// Custom components for enhanced MDX styling
const components: MDXComponents = {
  // Headings with enhanced styling - using sans for clean, modern titles
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-slate-700 font-sans">
      {children}
    </h1>
  ),
  
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6 pb-2 border-b border-gray-300 font-sans">
      {children}
    </h2>
  ),
  
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 font-sans">
      {children}
    </h3>
  ),
  
  h4: ({ children }: { children: ReactNode }) => (
    <h4 className="text-xl font-semibold text-gray-700 mt-8 mb-3 font-sans">
      {children}
    </h4>
  ),
  
  h5: ({ children }: { children: ReactNode }) => (
    <h5 className="text-lg font-semibold text-gray-700 mt-6 mb-3 font-sans">
      {children}
    </h5>
  ),
  
  h6: ({ children }: { children: ReactNode }) => (
    <h6 className="text-base font-semibold text-gray-600 mt-4 mb-2 font-sans">
      {children}
    </h6>
  ),

  // Enhanced paragraph styling - mono for technical/legal document feel
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-gray-800 leading-relaxed mb-4 text-base font-mono">
      {children}
    </p>
  ),

  // Styled lists - mono for technical/legal document consistency
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-outside mb-6 ml-6 text-gray-800 font-mono">
      {children}
    </ul>
  ),
  
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-outside mb-6 ml-6 text-gray-800 font-mono">
      {children}
    </ol>
  ),
  
  li: ({ children }: { children: ReactNode }) => (
    <li className="leading-relaxed mb-2 pl-2 font-mono">
      {children}
    </li>
  ),

  // Enhanced blockquote - mono for technical/legal document consistency
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-slate-600 pl-6 py-4 my-6 bg-slate-50 italic text-gray-800 rounded-r-lg font-mono">
      {children}
    </blockquote>
  ),

  // Styled code blocks - monospace for technical content (emails, codes, etc.)
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm font-mono border">
      {children}
    </code>
  ),
  
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono border">
      {children}
    </pre>
  ),

  // Enhanced links - mono font for consistency with paragraph text
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a 
      href={href} 
      className="text-blue-700 hover:text-blue-900 underline hover:no-underline transition-colors duration-200 font-mono"
      target={href?.startsWith('http') ? '_blank' : '_self'}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),

  // Styled table elements - serif for legal documents with better formal styling
  table: ({ children }: { children: ReactNode }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-slate-300 border border-slate-400 shadow-sm">
        {children}
      </table>
    </div>
  ),
  
  thead: ({ children }: { children: ReactNode }) => (
    <thead className="bg-slate-100">
      {children}
    </thead>
  ),
  
  tbody: ({ children }: { children: ReactNode }) => (
    <tbody className="bg-white divide-y divide-slate-200">
      {children}
    </tbody>
  ),
  
  tr: ({ children }: { children: ReactNode }) => (
    <tr className="hover:bg-slate-50 transition-colors duration-150">
      {children}
    </tr>
  ),
  
  th: ({ children }: { children: ReactNode }) => (
    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider font-sans">
      {children}
    </th>
  ),
  
  td: ({ children }: { children: ReactNode }) => (
    <td className="px-6 py-4 text-sm text-slate-800 font-mono">
      {children}
    </td>
  ),

  // Enhanced horizontal rule
  hr: () => (
    <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
  ),

  // Strong and emphasis styling - mono for consistency with paragraph text
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-gray-900 font-mono">
      {children}
    </strong>
  ),
  
  em: ({ children }: { children: ReactNode }) => (
    <em className="italic text-gray-800 font-mono">
      {children}
    </em>
  ),

  // Custom callout boxes for important legal information
  div: ({ children, className, ...props }: { children: ReactNode; className?: string; [key: string]: any }) => {
    // Check if it's a special callout div
    if (className?.includes('callout')) {
      const calloutType = className.includes('warning') ? 'warning' : 
                         className.includes('info') ? 'info' : 
                         className.includes('success') ? 'success' : 'default';
      
      const styles = {
        warning: 'bg-amber-50 border-l-4 border-amber-500 text-amber-900 p-5 mb-6 rounded-r-lg font-mono shadow-sm',
        info: 'bg-slate-50 border-l-4 border-slate-500 text-slate-900 p-5 mb-6 rounded-r-lg font-mono shadow-sm',
        success: 'bg-emerald-50 border-l-4 border-emerald-500 text-emerald-900 p-5 mb-6 rounded-r-lg font-mono shadow-sm',
        default: 'bg-gray-50 border-l-4 border-gray-500 text-gray-900 p-5 mb-6 rounded-r-lg font-mono shadow-sm'
      };

      return (
        <div className={styles[calloutType as keyof typeof styles]} {...props}>
          {children}
        </div>
      );
    }
    
    return <div className={className} {...props}>{children}</div>;
  },
}

export function useMDXComponents(userComponents: MDXComponents = {}): MDXComponents {
  return {
    ...components,
    ...userComponents,
  }
}