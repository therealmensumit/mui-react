import { Box, Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <Box p={2} border={1} borderColor={"#ccc"} height={"100%"} borderRadius={2}>
      <Skeleton
        animation="wave"
        variant="rounded"
        width={"100%"}
        height={"10rem"}
        style={{ marginBlockEnd: 8 }}
      />
      <Skeleton
        variant="rounded"
        width={"100%"}
        height={40}
        style={{ marginBlockEnd: 4 }}
      />
      <Skeleton
        variant="rounded"
        width={"100%"}
        height={32}
        style={{ marginBlockEnd: 4 }}
      />
      <Skeleton variant="rounded" width={"100%"} height={20} />
    </Box>
  );
};

export default Loading;
