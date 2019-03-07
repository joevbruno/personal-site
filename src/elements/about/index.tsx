/**
 * About
 */
import * as React from 'react';
import { IAboutProps } from './types';

import {
  AboutWrapper,
  Text,
  TextWrapper,
  Title,
  Subtitle,
  ContentWrapper,
} from './styles';

export function About(props: IAboutProps) {
  const { title, subtitle, primaryBlock, secondaryBlock } = props;

  return (
    <AboutWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <ContentWrapper>
        <TextWrapper>
          <Text>{primaryBlock}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>{secondaryBlock}</Text>
        </TextWrapper>
      </ContentWrapper>
    </AboutWrapper>
  );
}
