import { SxProps } from '@mui/material';
import styled from 'styled-components';

export const Map = styled.main`
  z-index: -1;
  position: absolute;
  top: 50vw;
  width: 100%;
  bottom: 0;
  @media (min-width: 481px) {
    top: 10%;
  }
`;

export const alertStyle: SxProps = {
  position: 'absolute',
  top: '40%',
  left: '0',
  right: '0',
  margin: 'auto',
  width: '70%',
  zIndex: '1000',
  maxWidth: '400px',
};
