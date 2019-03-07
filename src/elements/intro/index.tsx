/**
 * Intro
 */
import * as React from 'react';
import { IIntroProps } from './types';

import {
  IntroWrapper,
  Link,
  LinksWrapper,
  InfoWrapper,
  PrimaryInfoText,
  SecondaryInfoText,
} from './styles';

export function Intro(props: IIntroProps) {
  const { links, title, subtitle } = props;

  const linkComps = links.map(({ displayName, link }) => (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      {displayName}
    </Link>
  ));

  return (
    <IntroWrapper>
      <LinksWrapper>{linkComps}</LinksWrapper>
      <InfoWrapper>
        <PrimaryInfoText>{title}</PrimaryInfoText>
        <SecondaryInfoText>{subtitle}</SecondaryInfoText>
      </InfoWrapper>
    </IntroWrapper>
  );
}
