const BASE_URL = "/favicons";

const FAVICONS = {
  icon: [
    { url: `${BASE_URL}/favicon.ico`, type: "image/x-icon" },
    { url: `${BASE_URL}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
    {
      url: `${BASE_URL}/android-icon-192x192.png`,
      sizes: "192x192",
      type: "image/png",
    },
  ],
  apple: [
    { url: `${BASE_URL}/apple-icon.png` },
    {
      url: `${BASE_URL}/apple-icon-180x180.png`,
      sizes: "180x180",
      type: "image/png",
    },
  ],
  other: [
    {
      rel: "apple-touch-icon-precomposed",
      url: `${BASE_URL}/apple-icon-precomposed.png`,
    },
  ],
};

export default FAVICONS;
