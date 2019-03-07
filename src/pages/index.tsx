/**
 * Only one page =)
 */
import * as React from 'react';
import { Header, Intro, About, CallToAction, Footer } from '../elements';
import { PortfolioPageWrapper, HeaderWrapper } from './styles';
import { getData } from './helpers';

export function PortfolioPage() {
  const {
    paragraphs,
    misc,
    links,
    titles,
    footer,
    introTitle,
    introSubtitle,
    introDescription,
    ctaLabel,
    aboutTitle,
    ctaTitle,
    primaryBlock,
    secondaryBlock,
    ctaDescription,
    action,
  } = getData();

  return (
    <PortfolioPageWrapper>
      <HeaderWrapper>
        <Header />
        <Intro links={links} title={introTitle} subtitle={introSubtitle} />
      </HeaderWrapper>
      <About
        title={aboutTitle}
        subtitle={introDescription}
        primaryBlock={primaryBlock}
        secondaryBlock={secondaryBlock}
      />
      <CallToAction
        title={ctaTitle}
        description={ctaDescription}
        label={ctaLabel}
        action={action}
      />
      <Footer content={footer} />
    </PortfolioPageWrapper>
  );
}
