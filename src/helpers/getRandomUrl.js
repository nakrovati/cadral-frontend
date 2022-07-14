export default function getRandomUrl() {
  const randomSites = [
    "https://www.google.com/",
    "https://www.deepl.com/translator",
    "https://habr.com/",
    "https://github.com/",
    "https://www.postman.com/",
    "https://facebook.com/",
    "https://www.youtube.com/",
    "https://instagram.com/",
    "https://twitter.com/",
    "https://www.wikipedia.org/",
    "https://www.amazon.com/",
    "https://netflix.com/",
    "https://www.reddit.com/",
    "https://vk.com/",
    "https://www.naver.com/",
  ];

  return randomSites[Math.floor(Math.random() * randomSites.length)];
}
