import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';
import dayjs from 'dayjs';
import SunCalc from 'suncalc';

const _fetchJsonWithTimeoutMs = (url, options = {}, timeoutMs = 5000) => {
  const controller = typeof window !== 'undefined' ? new window.AbortController() : { abort: () => {} };
  const { signal = {} } = controller;
  const responseRequestTimeout = setTimeout(() => controller.abort(), timeoutMs);

  return new Promise(((resolve, reject) => {
    fetch(url, { ...options, signal })
      .then((response) => {
        // If we have a response, we don't want to cancel via the AbortController
        clearTimeout(responseRequestTimeout);
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        const message = `Error fetching ${url}: ${e}`;
        reject(message);
      });
  }));
};

export const getAstronomyPayload = async () => {
  const IP_URL = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCcgUgiLr5rlsGTfAYw9fhzjlnPlOUxL8U';

  const all = await _fetchJsonWithTimeoutMs(IP_URL, {}, 4000);
  console.log(all);
  return { all };
};

export const getSunsetText = async () => {
  try {
    const {
      latitude, longitude, city,
    } = await getAstronomyPayload();

    const { sunset } = SunCalc.getTimes(new Date(), latitude, longitude);
    const nowTime = dayjs(new Date());
    const sunsetTime = dayjs(sunset);
    const sunsetTimeFormatted = sunsetTime.format('h:mmA');

    const wasOrIs = (sunsetTime < nowTime) ? 'was' : 'is';

    return `Sunset in ${city} ${wasOrIs} at ${sunsetTimeFormatted} today`;
  } catch (e) {
    console.log(`Error fetching sunset: ${e}`);
  }

  return 'Go outside';
};
