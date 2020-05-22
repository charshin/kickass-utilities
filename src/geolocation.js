import 'isomorphic-fetch';
import { countries } from 'country-data';

const GELOCOATION_DB_URL = 'https://geolocation-db.com/json';

const countriesWithoutFlag = [
  'aq',
  'bl',
  'bq',
  'cw',
  'gg',
  'im',
  'je',
  'mf',
  'ss',
  'sx',
];

const countryCodeOptions = countries.all
  .filter(
    ({ status, alpha2, countryCallingCodes }) =>
      status === 'assigned' &&
      alpha2 &&
      !countriesWithoutFlag.includes(alpha2.toLowerCase()) &&
      countryCallingCodes?.[0],
  )
  .map(({ name, alpha2, countryCallingCodes }) => ({
    key: alpha2,
    value: `${name} (${countryCallingCodes?.[0]})`,
    text: `(${alpha2}) ${countryCallingCodes?.[0]}`,
    flag: alpha2.toLowerCase(),
  }));

const fetchGeolocation = async () => {
  try {
    return await (await fetch(GELOCOATION_DB_URL)).json();
    // eslint-disable-next-line no-empty
  } catch {}
  return null;
};

export default { countryCodeOptions, fetchGeolocation };
