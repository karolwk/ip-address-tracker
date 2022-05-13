export interface IpifyApiResponse {
  ip: string;
  location: {
    country: string;
    city: string;
    region: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
  };
  isp: string;
}
