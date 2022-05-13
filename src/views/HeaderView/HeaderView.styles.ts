import styled from 'styled-components';

export const Header = styled.header`
  padding-top: 1em;
  background-image: url('images/pattern-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  width: 100%;
  height: 15em;

  @media (min-width: ${(props) => props.theme.widths.desktop}) {
    height: 14em;
  }
`;

export const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 23px;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  @media (min-width: ${(props) => props.theme.widths.desktop}) {
    font-size: 2.4em;
  }
`;
