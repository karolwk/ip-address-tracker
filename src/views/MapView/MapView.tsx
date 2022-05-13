import L from 'leaflet';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxTypedHooks';
import { fetchIpData } from '../../store/slices/getIpData.slice';
import { fetchUserIP } from '../../store/slices/getIp.slice';
import { useEffect } from 'react';
import { IpifyApiResponse } from '../../shared/types';
import { alertStyle, Map } from './MapView.styles';
import { AlertTitle, Alert, Zoom } from '@mui/material';
import { MAP_TOKEN } from '../../shared/api';

const MapView = () => {
  const dispatch = useAppDispatch();
  const { ip, error } = useAppSelector((state) => state.userIp);

  const ipData = useAppSelector(
    (state) => state.ipData.data
  ) as IpifyApiResponse;

  useEffect(() => {
    if (ip) {
      dispatch(fetchIpData(ip));
    } else {
      dispatch(fetchUserIP());
    }
  }, [dispatch, ip]);

  useEffect(() => {
    const map = L.map('map');
    if (ipData.location) {
      const { lat, lng } = ipData.location;

      const myIcon = L.icon({
        iconUrl: 'images/icon-location.svg',
        iconSize: [37, 46],
      });

      map.setView([lat, lng], 14);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: MAP_TOKEN,
        }
      ).addTo(map);

      L.marker([lat, lng], { icon: myIcon }).addTo(map);
    }

    return () => {
      map.remove();
    };
  }, [ipData]);

  return (
    <>
      <Map id="map"></Map>
      {error && (
        <Zoom in={true}>
          <Alert severity="error" sx={alertStyle}>
            <AlertTitle>
              <strong>{error}. </strong>
              It seems something on your side is blocking API call. If you have
              AdBlock please make sure you disable it on this page and refresh
              page again.
            </AlertTitle>
          </Alert>
        </Zoom>
      )}
    </>
  );
};

export default MapView;
