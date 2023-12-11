import { useEffect, useState } from 'react';
import FilterMenu from './FilterMenu';
import Link from 'next/link';

const Blogs = ({ articles }) => {
  const [filteredArticles, setFilteredArticles] = useState(null);
  const [cutPerPage, setCutPerPage] = useState(6);
  useEffect(() => {
    setFilteredArticles(articles);
  }, [articles]);
  const loadMore = () => {
    setCutPerPage((prev) => prev + 3);
  };
  return (
    <div className="mt-[100px]">
      <h1 className="text-2xl font-semibold">All blog post</h1>
      <FilterMenu articles={articles} />
      <div className="flex flex-wrap justify-between gap-8">
        {filteredArticles &&
          filteredArticles.slice(0, cutPerPage).map((f) => (
            <Link href={`/blog/${f.id}`}>
              <div className="p-4 border border-[#E8E8EA] rounded-lg w-[360px]">
                <img className="w-full h-[240px]" src={f.social_image} />
                <div className="flex gap-2 my-4 flex-wrap">
                  {f?.tag_list.map((t) => (
                    <div className="bg-blue-100 text-blue-600 py-1 px-2.5 rounded-md w-fit">
                      {t}
                    </div>
                  ))}
                </div>

                <h1 className="text-2xl font-semibold break-words">
                  {f.title}
                </h1>
              </div>
            </Link>
          ))}
      </div>
      <div className="text-center">
        <button className="px-4 py-2" onClick={loadMore}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default Blogs;
