/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
} 