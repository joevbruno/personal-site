/**
 * Styles
 */
import styled from 'styled-components';

export const HeaderWrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Logo = styled('span')`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 12px;
  width: 24px;
  height: 24px;
  min-width: 24px;
  color: #c3b93e;
  background: #000;
  padding: 4px;
  border-radius: 2px;
`;
