/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports: {
        "@mui/icons-materials": {
            transform: "@mui/icons-materials/${member}"
        }
    }
};

export default nextConfig;
