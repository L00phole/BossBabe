/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withVideos = require("next-videos");

module.exports = withVideos();

module.exports = nextConfig;
module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "images.unsplash.com",
      "jennie-michele.0.capacedev.se",
    ],
  },
};
