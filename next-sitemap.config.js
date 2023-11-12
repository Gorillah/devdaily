/** @type {import('next-sitemap').IConfig} */
const siteMetadata = require("./lib/siteMetadata");

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
};
