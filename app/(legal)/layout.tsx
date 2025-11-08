import { ReactNode } from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

interface LegalLayoutProps {
  children: ReactNode;
  title?: string;
}

function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg prose-gray max-w-none">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
            {title && (
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 pb-4 border-b-2 border-blue-600">
                  {title}
                </h1>
              </div>
            )}
            <div className="mdx-content">
              {children}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function LegalPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LegalLayout>
      {children}
    </LegalLayout>
  );
}