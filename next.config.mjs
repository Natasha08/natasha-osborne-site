const nextConfig = {
  // output: 'export',
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/posts/:path*',
        destination: '/:path*', // Matches `blog.natasha-osborne.dev/*`
        has: [{type: 'host', value: 'blog.natasha-osborne.dev'}],
      },
    ]
  },
};

export default nextConfig;
