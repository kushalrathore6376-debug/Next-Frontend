const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Off: React 18/19 Strict Mode's dev-only double-mount runs the Digital
  // Twin viewer's effect cleanup once before the "real" mount. R3F disposes
  // its WebGLRenderer on unmount, which force-loses the canvas's WebGL
  // context — and a context lost that way doesn't come back on remount, so
  // the second (kept) mount renders nothing, silently. Production builds
  // never double-invoke, so this only affects local dev.
  reactStrictMode: false,
  poweredByHeader: false,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
