import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 0.5em;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  width: 80%;
  gap: 3px;
  max-width: 1300px;
  z-index: 10;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (min-width: ${(props) => props.theme.widths.desktop}) {
    flex-direction: row;
    justify-content: space-evenly;
    position: absolute;
    top: 10em;
    height: 7em;
  }
`;

export const Title = styled.h1`
  font-size: 0.6em;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  @media (min-width: ${(props) => props.theme.widths.desktop}) {
    align-items: baseline;
    gap: 0.5em;
    font-size: 1.2em;
  }
`;

export const Vline = styled.div`
  @media (min-width: ${(props) => props.theme.widths.desktop}) {
    height: 70%;
    border-right: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;
