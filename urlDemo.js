import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// URL Object - returns an object with a bunch of details about the url
const urlObj = new URL(urlString);
console.log(urlObj);

// format() - takes the object and makes it a string
console.log(url.format(urlObj));

// import.meta.url - gives file URL
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));
