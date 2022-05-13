import { useAppSelector } from '../../hooks/reduxTypedHooks';
import { IpifyApiResponse } from '../../shared/types';
import { Wrapper, Title, Details, Vline } from './DetailView.styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Zoom from '@mui/material/Zoom';
import { CircularProgress } from '@mui/material';

type Props = {};

const DetailView = (props: Props) => {
  const data = useAppSelector((state) => state.ipData.data) as IpifyApiResponse;
  const { loading, error } = useAppSelector((state) => state.ipData);

  return (
    <Wrapper>
      {!error ? (
        <>
          <Details>
            <Title>IP ADDRESS</Title>
            {loading !== 'succeded' ? <CircularProgress /> : data.ip}
          </Details>
          <Vline />

          <Details>
            <Title>LOCATION</Title>
            {loading !== 'succeded' ? (
              <CircularProgress />
            ) : (
              `${data.location.city}, ${data.location.country} ${data.location.postalCode}`
            )}
          </Details>
          <Vline />

          <Details>
            <Title>TIMEZONE</Title>
            {loading !== 'succeded' ? (
              <CircularProgress />
            ) : (
              'UTC' + data.location.timezone
            )}
          </Details>
          <Vline />

          <Details>
            <Title>ISP</Title>
            {loading !== 'succeded' ? <CircularProgress /> : data.isp}
          </Details>
        </>
      ) : (
        <Zoom in={true}>
          <Alert severity="warning" sx={{ width: '50%' }}>
            <AlertTitle>Warning</AlertTitle>
            {error}. No such record in database. Please use different IP address
            or domain name.
          </Alert>
        </Zoom>
      )}
    </Wrapper>
  );
};

export default DetailView;
