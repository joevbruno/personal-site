/**
 * Styles
 */
import styled from 'styled-components';

export const AboutWrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  padding-bottom: 56px;
  min-height: 400px;
`;

export const ContentWrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 24px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextWrapper = styled('div')`
  max-width: 600px;
  width: 100%;
  padding: 4px 40px;

  &:first-child {
    border-right: 1px solid #e7e7f3;
  }

  @media (max-width: 800px) {
    padding: 32px;

    &:first-child {
      border-right: none;
    }
  }
`;

export const Title = styled('h5')`
  font-size: 32px;
  font-family: 'Inter';
  line-height: 56px;
`;

export const Subtitle = styled('p')`
  line-height: 1.8;
  font-size: 14px;
  color: #777;
  margin-bottom: 24px;
`;

export const Text = styled('p')`
  line-height: 1.8;
  font-size: 14px;

  @media (max-width: 800px) {
    text-align: center;
  }
`;
