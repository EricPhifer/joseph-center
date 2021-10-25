import { Link } from 'gatsby';
import React from 'react';
import { useNavPrograms } from '../utils/useNavPrograms';

const ProgramsTitleAndSlug = () => {
  const GetProgramList = () => {
    const detailList = [];
    const details = useNavPrograms();
    console.log(details);
    details.programs.forEach((detail) => {
      detailList.push({
        id: detail.id,
        title: detail.title,
        slug: detail.slug.current,
      });
    });
    return detailList;
  };

  const detailedList = GetProgramList();

  return (
    <ul>
      {detailedList.map((programDetail) => (
        <li key={programDetail.id}>
          <Link to={`/${programDetail.slug}`}>{programDetail.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ProgramsTitleAndSlug;
