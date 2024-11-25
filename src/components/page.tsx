const Char = ({ params }: { params: { char: string } }) => {
  const fixedItems = items.filter((item) => item.startWord === params.char);
  return (
    <div>
      {fixedItems.map((item) => (
        <div>{item.startWord}</div>
      ))}
    </div>
  );
};
export default Char;

const items = [
  {
    startWord: "s",
  },
];
