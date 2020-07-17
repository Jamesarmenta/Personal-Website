import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';
import dayjs from 'dayjs';
import SunCalc from 'suncalc';
import ReactGA from 'react-ga';

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

export const getSunsetText = async () => {
  try {
    const {
      latitude, longitude, city,
    } = await _fetchJsonWithTimeoutMs('https://geolocation-db.com/json/');

    const { sunset } = SunCalc.getTimes(new Date(), latitude, longitude);
    const nowTime = dayjs(new Date());
    const sunsetTime = dayjs(sunset);
    const sunsetTimeFormatted = sunsetTime.format('h:mmA');

    const wasOrIs = (sunsetTime < nowTime) ? 'was' : 'is';

    return `Sunset in ${city} ${wasOrIs} at ${sunsetTimeFormatted} today`;
  } catch (e) {
    ReactGA.event({
      category: 'Error',
      action: 'SunsetFetch',
    });
  }

  return 'Go outside';
};
