const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        utils: path.resolve(__dirname, "src/utils"),
        hooks: path.resolve(__dirname, "src/hooks"),
        types: path.resolve(__dirname, "src/types"),
        assets: path.resolve(__dirname, "src/assets"),
        styles: path.resolve(__dirname, "src/styles"),
        states: path.resolve(__dirname, "src/states"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpe?g|bin|gif|glb|gltf|jpeg)$/,
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
      ],
    },
  });
};

// Generate Post Page Through Markdown Data
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Get All Markdown File For Paging
  const queryAllMarkdownData = await graphql(
    `
    {
      allMarkdownRemark(
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
          limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              categories
            }
          }
        }
      }
    }
    `
  );

  // Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  const posts = queryAllMarkdownData.data.allMarkdownRemark.edges;
  // Import Post Template Component
  const PostTemplateComponent = path.resolve(
    __dirname,
    "src/templates/PostTemplate.tsx"
  );

  // Page Generating Function
  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug },
    };

    createPage(pageOptions);
  };

  // Generate Post Page And Passing Slug Props for Query
  posts.forEach(generatePostPage);

  // const PostListTemplateComponent = path.resolve(
  //   __dirname,
  //   "src/templates/PostListTemplate.tsx"
  // );

  // const gereatePostListPage = () => {
  //   const pageOptions = {
  //     path: "/postList",
  //     component: PostListTemplateComponent
  //   };

  //   createPage(pageOptions);
  // };

  // gereatePostListPage();
};

// Generate a Slug Each Post Data
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: "slug", value: slug });
  }
};

