import { LinearProgress } from "@mui/material";

const ProgressBar = () => {
  const dummyValue = 55;
  return (
    <>
      <LinearProgress
        variant="determinate"
        value={dummyValue}
        color="error"
      ></LinearProgress>
    </>
  );
};

export default ProgressBar;
