export const VideoThumnail = (props) => {
  console.log(props);

  return (
    <>
      <img
        src={props}
        alt="test"
        height="180"
        width="300"
        style={{ borderRadius: 10 }}
      />
    </>
  );
};
