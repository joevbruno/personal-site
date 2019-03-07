/**
 * CallToAction
 */
import * as React from 'react';
import { ICallToActionProps } from './types';
import { CallToActionWrapper, Title, Description, Button } from './styles';

export function CallToAction(props: ICallToActionProps) {
  const { title, description, label, action } = props;

  return (
    <CallToActionWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <a href={action} target="_blank" rel="noopener noreferrer">
        <Button>{label}</Button>
      </a>
    </CallToActionWrapper>
  );
}
