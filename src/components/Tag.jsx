const Tag = ({ color, children }) => {
  console.log(color, children);
  return (
    <div
      className={`w-fit py-1 px-2.5 rounded-md text-white mb-4`}
      style={{ backgroundColor: color }}
    >
      {children.toUpperCase()}
    </div>
  );
};

export default Tag;
