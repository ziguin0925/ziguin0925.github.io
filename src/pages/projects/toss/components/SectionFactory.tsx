import React from 'react';
import FeatureSection from './FeatureSection';
import SlideSection from './SlideSection';
import FadeSection from './FadeSection';
import CardSection from './CardSection';
import HeroSection from './HeroSection';

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  features: string[];
}

interface SectionFactoryProps {
  section: Feature;
  index: number;
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  variant?: 'default' | 'slide' | 'fade' | 'card' | 'hero';
}

const SectionFactory: React.FC<SectionFactoryProps> = ({ 
  section, 
  index, 
  sectionsRef, 
  variant = 'default' 
}) => {
  const sectionVariants = {
    default: FeatureSection,
    slide: SlideSection,
    fade: FadeSection,
    card: CardSection,
    hero: HeroSection
  };

  const SectionComponent = sectionVariants[variant];

  return (
    <SectionComponent
      section={section}
      index={index}
      sectionsRef={sectionsRef}
    />
  );
};

export default SectionFactory;