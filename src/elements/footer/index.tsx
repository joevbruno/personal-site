/**
 * Footer
 */
import * as React from 'react';
import { IFooterProps } from './types';
import { FooterWrapper, FooterText } from './styles';

export function Footer(props: IFooterProps) {
  const { content } = props;

  return (
    <FooterWrapper>
      <FooterText>{content}</FooterText>
    </FooterWrapper>
  );
}
