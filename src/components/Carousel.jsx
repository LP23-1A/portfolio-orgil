import axios from 'axios';
import { useEffect, useState } from 'react';
import Tag from './Tag';

const Carousel = ({ articles }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const increment = () => {
    if (activeIndex === 2) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex((prev) => prev + 1);
  };

  const decrement = () => {
    if (activeIndex === 0) {
      setActiveIndex(2);
      return;
    }
    setActiveIndex((prev) => prev - 1);
  };

  return (
    <div className="mt-[100px]">
      {articles.length != 0 && (
        <div className="w-full relative text-black rounded-lg">
          <img
            src={articles[activeIndex].social_image}
            className="w-full min-h-[600px] rounded-lg"
          />
          <div className="bg-white rounded-lg absolute left-0 bottom-0 p-10 max-w-[518px] m-3 border border-[#E8E8EA]">
            <Tag color={articles[activeIndex]?.flare_tag?.bg_color_hex}>
              {articles[activeIndex]?.flare_tag?.name?.toUpperCase()}
            </Tag>

            <h1 className="text-[36px] font-semibold">
              {articles[activeIndex].title}
            </h1>
            <p className="text-[#97989F]">
              {Date(articles[activeIndex].published_at)}
            </p>
          </div>
        </div>
      )}
      <div className="flex justify-end gap-4 my-4">
        <button onClick={decrement}>Prev</button>
        <button onClick={increment}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
