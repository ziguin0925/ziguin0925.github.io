import React from 'react';
import { CTAButton } from '../../types';
import { cn } from '../../utils';
import Button from '../ui/Button';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton: CTAButton;
  gradient?: string;
  className?: string;
}

/**
 * Call-to-Action 섹션 컴포넌트
 */
const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  gradient = 'from-blue-600 to-purple-600',
  className = ''
}) => {
  return (
    <section className={cn('relative z-10 py-20 px-6 lg:px-8', className)}>
      <div className="max-w-4xl mx-auto text-center">
        <div className={cn('rounded-3xl p-12 shadow-2xl bg-gradient-to-r', gradient)}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text={primaryButton.text}
              href={primaryButton.href}
              variant="primary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            />
            <Button
              text={secondaryButton.text}
              href={secondaryButton.href}
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
