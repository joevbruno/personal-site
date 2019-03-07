/**
 * Helpers
 */

import content from "../content.json";

export function getData() {
  const { paragraphs, misc, links, titles, footer } = content;
  const [introTitle, introSubtitle, introDescription, ctaLabel] = misc;
  const [aboutTitle, ctaTitle] = titles;
  const [primaryBlock, secondaryBlock, ctaDescription] = paragraphs;
  const action = links[2].link;

  return {
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
    action
  };
}
