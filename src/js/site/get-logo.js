import "whatwg-fetch";

export const styleSvg = (parent, logoColor) => {
  if (!logoColor) return;
  Array.from(parent.querySelectorAll("path, polyline, polygon, rect")).forEach(
    p => (p.style.fill = logoColor)
  );
  Array.from(parent.querySelectorAll("line")).forEach(
    p => (p.style.stroke = logoColor)
  );
};

export default url => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(data => data.text())
      .then(text => resolve(text))
      .catch(err => reject(err));
  });
};
