const URL_KEY = "urls:v1";

export function saveURL(data) {
  let urls = JSON.parse(localStorage.getItem(URL_KEY) || "[]");
  urls.push(data);
  localStorage.setItem(URL_KEY, JSON.stringify(urls));
}

export function getURLs() {
  return JSON.parse(localStorage.getItem(URL_KEY) || "[]");
}

export function findURL(shortcode) {
  const urls = getURLs();
  return urls.find(u => u.shortcode === shortcode);
}
