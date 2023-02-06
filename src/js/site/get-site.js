/* get domain */
import config from "./config";

// Find site/masthead info
const findSite = hostname => {
  const { sites } = config;
  for (let i = 0; i < sites.length; i += 1) {
    for (let x = 0; x < sites[i].urls.length; x += 1) {
      if (hostname.includes(sites[i].urls[x])) return sites[i];
    }
  }
  return null;
};

// Different logics to get which site/masthead to use
export default () => {

  // use meta tag
  if (document.querySelector('meta[name="masthead"]')) {
    const override = document
      .querySelector('meta[name="masthead"]')
      .getAttribute("content");
    return findSite(override);
  }

  // use hostname
  const hostname = window.location.hostname || window.location.host;
  const site = findSite(hostname);
  if (site) return site;

  // use og:url - old debugging way (better just add masthead meta)
  if (document.querySelector('meta[property="og:url"]')) {
    const debugname = document
      .querySelector('meta[property="og:url"]')
      .getAttribute("content");

    return findSite(debugname);
  }

  return null;
};
