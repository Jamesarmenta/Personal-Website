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
  const IP_KEY = '35eed071b8600098a2ab9adb119c9531';
  const IP_URL = `http://api.ipapi.com/api/check?access_key=${IP_KEY}&fields=latitude,longitude,city`;

  const { latitude, longitude, city } = await _fetchJsonWithTimeoutMs(IP_URL, {}, 4000);
  return { latitude, longitude, city };
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
