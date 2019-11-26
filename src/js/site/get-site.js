/* get domain */
import config from "./config";

export default debug => {
  let hostname = null;
  if (debug) {
    if (document.querySelector('meta[property="og:url"]')) {
      hostname = document
        .querySelector('meta[property="og:url"]')
        .getAttribute("content");
    }
  } else {
    hostname = window.location.hostname || window.location.host;
  }

  if (hostname === null) return null;
  const { sites } = config;

  for (let i = 0; i < sites.length; i += 1) {
    for (let x = 0; x < sites[i].urls.length; x += 1) {
      if (hostname.includes(sites[i].urls[x])) return sites[i];
    }
  }
  return null;
};
