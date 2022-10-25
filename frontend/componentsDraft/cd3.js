export function Chest2({ text }) {
  const [visibility, setvisibility] = React.useState(`visible`);

  React.useEffect(() => {
    if (visibility === `visible`) {
      setTimeout(() => {
        setvisibility(`hidden`);
      }, 1000);
    } else if (visibility === `hidden`) {
      setTimeout(() => {
        setvisibility(`visible`);
      }, 1000);
    }
  }, [visibility]);

  return (
    <>
      <span className="text-test" style={{ visibility: visibility }}>
        {" "}
        {text}{" "}
      </span>
    </>
  );
}
