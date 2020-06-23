const path = require('path');
exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);

  const { nodes: posts } = data.allMdx;

  const postsPerPage = 7;

  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/articles` : `/articles/${i + 1}`,
      component: path.resolve('./src/templates/articles.js'),
      context: {
        length: posts.length,
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages,
      },
    });
  });
  posts.forEach(({ frontmatter, id }) => {
    const slug = frontmatter.slug;
    createPage({
      path: slug,
      component: path.resolve('./src/templates/singleArticle.js'),
      context: { id },
    });
  });
};
