import { Box, Text } from "@chakra-ui/react";

type Props = {
  bg: string;
  category: string;
};

const Categorys = ({ bg, category }: Props) => {
  return (
    <Box
      className={`${bg} rounded-md hover:-translate-y-1 transition-all cursor-pointer  w-28 h-28 flex justify-center items-center mont text-center text-xl font-bold`}
    >
      <Text>{category}</Text>
    </Box>
  );
};

export default Categorys;
