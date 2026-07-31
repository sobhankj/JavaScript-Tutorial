const URLs = [
    "https://www.google.com",
    "https://www.facebook.com",
    "https://www.twitter.com",
    "https://www.instagram.com",
    "https://www.youtube.com",
]

const userURL = prompt("enter the URL");

let filteredURLs = URLs.filter(url => url.includes(userURL));

alert(`the URLs that include ${userURL} are: ${filteredURLs.join(", ")}`);