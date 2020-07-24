const path = require('path');
// redundant code as es6 imports and require cannot work
// together as of now. maybe once they are not experimental they can.
// Another approach is to use esm, but we will get to it when we actully need to.
// more info: https://github.com/gatsbyjs/gatsby/issues/7810
const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        posts: nodes {
          frontmatter {
            slug
          }
          id
        }
        tags: group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const { posts, tags } = data.allMdx;

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
  posts.map(({ frontmatter, id }) => {
    const slug = frontmatter.slug;
    createPage({
      path: slug,
      component: path.resolve('./src/templates/singleArticle.js'),
      context: { id },
    });
  });

  posts
    .filter(({ frontmatter }) => frontmatter.slug.toLowerCase() === `about`)
    .map(({ frontmatter, id }) => {
      const slug = frontmatter.slug;
      createPage({
        path: slug,
        component: path.resolve('./src/templates/aboutPage.js'),
        context: { id },
      });
    });

  // tags page

  tags.map((tag) => {
    createPage({
      path: `/articles/tags/${toKebabCase(tag.fieldValue)}`,
      component: path.resolve('./src/templates/tagPage.js'),
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
