// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    })

    return config
  },
  reactStrictMode: true,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  images: {
    deviceSizes: [320, 480, 768, 1024, 1280, 1440, 1600, 1920, 2048],
    imageSizes: [320, 480, 768, 1024, 1280, 1440, 1600, 1920, 2048],
  },
  sassOptions: {
    prependData: `@import "styles/variables"; @import "styles/mixins";`,
  },
}
