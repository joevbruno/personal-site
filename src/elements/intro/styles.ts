/**
 * Styles
 */
import styled from 'styled-components';

export const IntroWrapper = styled('div')`
  width: 100%;
  min-height: 450px;
  background: url('/background.svg');
  background-size: contain;
  background-position: 52% 40%;
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    background-size: cover;
    background-position: 46% 50%;
  }
`;

export const InfoWrapper = styled('div')`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 25%;
  top: 200px;

  @media (max-width: 800px) {
    display: none;
  }

  @media (min-width: 800px) and (max-width: 1200px) {
    right: 15%;
  }
`;

export const PrimaryInfoText = styled('span')`
  width: 100%;
`;

export const SecondaryInfoText = styled('span')`
  color: #555;
`;

export const LinksWrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  position: relative;
`;

export const Link = styled('a')`
  padding: 0 16px;
  color: #444;
  transition: color 0.5s ease;
  position: relative;

  @media (max-width: 800px) {
    padding: 4px 8px;
  }

  &:hover {
    color: #000;

    &::after {
      width: 100%;
    }
  }

  &::after {
    position: absolute;
    transition: all 0.5s ease;
    content: '';
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: #88cdef;
  }
`;
