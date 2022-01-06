export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  /*
  decorators: [],
  loaders: [
      async () => ({
          store: await import('../src/index').store
      })
  ]
  */
}