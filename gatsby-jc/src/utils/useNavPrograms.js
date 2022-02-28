import { useStaticQuery, graphql } from 'gatsby';

export const useNavPrograms = () => {
  const programsListData = useStaticQuery(graphql`
    query ProgramsQuery($slug: String) {
      programs: sanityPrograms(slug: { current: { eq: $slug } }) {
        id
        title
        slug {
          current
        }
      }
    }
  `);
  return programsListData;
};
