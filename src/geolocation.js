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
  return formatGeolocation(await (await fetch(GELOCOATION_DB_URL)).json());
};

const formatGeolocation = ({ country_name, country_code, ...rest }) => ({
  countryName: country_name,
  countryCode: country_code,
  ...rest,
});

export default { countryCodeOptions, fetchGeolocation };
