const settings = {
  name: 'gnorazwebui',
  state: {
    frontity: {
      url: 'https://jsnation2020.frontity.org',
      title: 'Test Frontity Blog',
      description: 'WordPress installation for Frontity development',
    },
  },
  packages: [
    {
      name: 'gnoraz-theme',
      state: {
        theme: {
          menu: [
            ['Home', '/'],
            ['Page 2', '/page/2/'],
            ['Lorem Ipsum', '/lorem-ipsum/'],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          url: 'https://jsnation2020.frontity.org',
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
  ],
};

export default settings;
