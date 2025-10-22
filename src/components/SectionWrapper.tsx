import React from 'react';

interface SectionWrapperProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subtitle, children }) => {
  return (
    <section className="py-16 animate-fade-in">
      <div className="mb-12">
        <h3 className="text-lg text-brand-green font-mono mb-2">{subtitle}</h3>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-slate-lightest tracking-tight font-kr">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  );
};
