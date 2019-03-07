/**
 * Styles
 */
import styled from 'styled-components';

export const CallToActionWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  padding-top: 48px;

  @media (max-width: 800px) {
    padding: 0 32px 32px 32px;
  }
`;

export const Title = styled('h5')`
  text-align: center;
  width: 100%;
  font-size: 20px;
`;

export const Description = styled('p')`
  max-width: 600px;
  text-align: center;
  padding: 16px 0;
  line-height: 1.8;
  font-size: 14px;
`;

export const Button = styled('button')`
  background: #fffbc8;
  border: 1px solid #a79e2f;
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 800;
  font-family: 'Inter';
  margin: 8px;
  min-width: 100px;
  cursor: pointer;
  transition: all 0.5s ease;

  & * {
    cursor: pointer !important;
  }

  &:hover {
    background: #fef690;
  }
`;
