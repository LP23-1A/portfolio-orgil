import Tag from './Tag';

const Trending = ({ discuss }) => {
  console.log(discuss);
  return (
    <div className="mt-[100px]">
      <h1 className="text-2xl font-semibold">Discuss</h1>
      <div className="flex gap-4 mt-4">
        {discuss.map((d) => (
          <div
            className="w-[290px] h-[320px] rounded-lg text-white flex flex-col justify-end p-7"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${d.social_image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <Tag color={d?.flare_tag?.bg_color_hex}>{d?.flare_tag.name}</Tag>

            <h1 className="text-lg font-semibold">{d.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
