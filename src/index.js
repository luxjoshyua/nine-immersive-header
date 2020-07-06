/*
find header and footer elements and insert correct header and footer into them
*/

import getSite from "./js/site/get-site";
import setupHeader from "./js/header";
import setupFooter from "./js/footer";

import "./sass/index.scss";

export default ({ headerConfig, footerConfig }) => {
  //if localhost then debug
  const site = getSite();
  console.log("@NIH: site: ", site);
  if (site === null) return;
  setupHeader(headerConfig, site);
  setupFooter(footerConfig, site);
};
