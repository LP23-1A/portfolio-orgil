import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from '@/components/Carousel';
import Trending from '@/components/Trending';
import { filterByTags } from '@/utils/filterByTags';
import Blogs from '@/components/Blogs';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [discuss, setDiscuss] = useState([]);

  const fetchData = async () => {
    const BASE_URL = 'https://dev.to/api/articles';
    const res = await axios.get(BASE_URL);

    setArticles(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setDiscuss(filterByTags(articles, 'discuss'));
  }, [articles]);

  return (
    <main className="px-8">
      <section className="w-[1216px] mx-auto">
        <Carousel articles={articles} />
      </section>
      <section className="w-[1216px] mx-auto">
        <Trending discuss={discuss.slice(0, 4)} />
      </section>
      <section className="w-[1216px] mx-auto">
        <Blogs articles={articles} />
      </section>
    </main>
  );
}
