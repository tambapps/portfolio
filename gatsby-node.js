const path = require('path');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // hack to allow dynamic routing for groovy pages
  if (page.path.match(/^\/groovy-shell/)) {
    createPage({
      path: '/groovy-shell',
      matchPath: '/groovy-shell/*',
      component: path.resolve('src/pages/groovy-shell.js'),
    });
  }
};
