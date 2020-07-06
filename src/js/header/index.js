import config from "../site/config";

import BackBtn from "./backbtn";
import MainLogo from "./mainlogo";
import ShareIcons from "./shareicons";

export default (
  { textColor = "white", bgColor = "black", logoColor = null, css = {} },
  site
) => {
  let header = document.querySelector("header.masthead");
  console.log("@NIH: header: ", header);
  if (!header) {
    header = document.querySelector("header");
  }else{
    return;
  }

  const { assets } = config;

  header.style.background = bgColor;

  for (let [key, value] of Object.entries(css)) {
    header.style[key] = value;
  }

  //back button
  header.appendChild(BackBtn(site, assets.back.svg, textColor));

  //main logo
  header.appendChild(MainLogo(site, logoColor));

  //share icons
  header.appendChild(ShareIcons(assets, textColor));
};
