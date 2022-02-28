import path from 'path';

async function turnProgramsIntoPages({ graphql, actions }) {
  // get template for this page
  const ProgramsTemplate = path.resolve('./src/templates/Programs.js');

  // query all programs
  const { data } = await graphql(`
    query {
      programs: allSanityPrograms {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);

  // loop over Programs and create a page for them
  data.programs.nodes.forEach((program) => {
    actions.createPage({
      // What is the URL for the new page?
      path: `programs/${program.slug.current}`,
      component: ProgramsTemplate,
      context: {
        slug: program.slug.current,
        program: program.title,
      },
    });
  });
}

export async function createPages(params) {
  // create pages dynamically
  // wait for all promises to be resolved before finishing function
  await Promise.all([turnProgramsIntoPages(params)]);
}
