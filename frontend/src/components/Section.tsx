import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable Section wrapper that enforces consistent layout across pages.
 * Provides the standard "title-holder" pattern used throughout the site.
 */
const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}) => {
  const sectionClass = `block ${className}`.trim();

  return (
    <section id={id} className={sectionClass}>
      <div className="container-fluid">
        <div className="title-holder">
          <h2>{title}</h2>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;