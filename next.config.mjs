/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsHmrCache : false,  //default to true
    },

    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "fgevtfrmnaemayoeozgf.supabase.co"
        }]
    }
};

export default nextConfig;
