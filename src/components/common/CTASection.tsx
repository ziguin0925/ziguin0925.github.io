import React from 'react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
  gradient?: string;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  gradient = 'from-blue-600 to-purple-600',
  className = ''
}) => {
  return (
    <section className={`relative z-10 py-20 px-6 lg:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className={`bg-gradient-to-r ${gradient} rounded-3xl p-12 shadow-2xl`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryButton.href}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {primaryButton.text}
            </a>
            <a
              href={secondaryButton.href}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {secondaryButton.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
