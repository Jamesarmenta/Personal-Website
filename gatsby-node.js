const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve('src/templates/project.jsx');
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
            }
            html
            id
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }
  const { edges } = result.data.allMarkdownRemark;
  edges.forEach(({ node }) => {
    const {
      frontmatter: {
        title,
        description,
      },
      html,
      id,
    } = node;

    const pathFromTitle = `/${encodeURI(title.toLowerCase().split(' ').join('-'))}`;
    createPage({
      path: pathFromTitle,
      component: projectTemplate,
      context: {
        fromMarkDown: true,
        title,
        description,
        html,
        id,
      },
    });
  });
};
