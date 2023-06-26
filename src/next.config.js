/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: './',
    generateBuildId: async () => {
        // time of build in human readable format
        return new Date().toISOString()
    }
}

module.exports = nextConfig
