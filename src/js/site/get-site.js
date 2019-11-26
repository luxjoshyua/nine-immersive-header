/* get domain */
import config from "./config";

const findSite = hostname => {
  const { sites } = config;
  for (let i = 0; i < sites.length; i += 1) {
    for (let x = 0; x < sites[i].urls.length; x += 1) {
      if (hostname.includes(sites[i].urls[x])) return sites[i];
    }
  }
  return null;
};

export default () => {
  const hostname = window.location.hostname || window.location.host;

  const site = findSite(hostname);
  if (site) return site;

  if (document.querySelector('meta[property="og:url"]')) {
    const debugname = document
      .querySelector('meta[property="og:url"]')
      .getAttribute("content");

    return findSite(debugname);
  }

  return null;
};
