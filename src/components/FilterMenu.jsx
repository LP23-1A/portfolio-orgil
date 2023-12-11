import { getAllTags } from '@/utils/getAllTags';
import React, { useEffect, useState } from 'react';

const FilterMenu = ({ articles }) => {
  const [activeAll, setActiveAll] = useState(false);
  const tags = getAllTags(articles);
  return (
    <div className="flex justify-between my-10">
      <div className="flex gap-2 flex-wrap">
        <p>All</p>
        {tags && activeAll
          ? tags.map((t) => <p>{t}</p>)
          : tags.slice(0, 5).map((t) => <p>{t}</p>)}
      </div>

      <p onClick={() => setActiveAll(true)}>View All</p>
    </div>
  );
};

export default FilterMenu;
