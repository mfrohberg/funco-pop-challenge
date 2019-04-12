const { configure, addDecorator } = require("@storybook/react")
const { withInfo } =  require("@storybook/addon-info")

// automatically import all files ending in *.stories.tsx
const req = require.context("../stories", true, /.story.tsx$/);

function loadStories() {
  addDecorator(withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          display: 'inline',
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
      infoBody: {
        backgroundColor: '#eee',
        padding: '0px 5px',
        lineHeight: '2',
      },
    },
    inline: true,
    source: false,
  }))
  req.keys().forEach(req);
}

configure(loadStories, module)