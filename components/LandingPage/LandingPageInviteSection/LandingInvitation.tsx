import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/AuthModalAtom";

const InvitationPage = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <Flex className=" flex-col justify-center items-center">
      <motion.div
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="w-full h-96 bg-[#2a2a2c] text-slate-200 flex flex-col justify-center items-center "
      >
        <div>
          <h1 className="lg:text-[4rem] text-[2rem] font-bold">
            Do not waste time thinking
          </h1>
          <h2 className="lg:text-[2rem] text-[1rem] font-semibold text-center">
            Create your eventhub account now
          </h2>
        </div>
        <div>
          <Button
            onClick={() => setAuthModalState({ view: "register", open: true })}
            variant="outline"
            className="mt-4 text-slate-200 "
          >
            Join Now
          </Button>
        </div>
      </motion.div>
    </Flex>
  );
};

export default InvitationPage;
