"use client";
// import { authModalState } from "@/atoms/authModal";
import { authModalState } from '@/atoms/AuthModalAtom'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { auth } from "@/firebase/firebaseConfig";
import AuthInput from '@/components/Modal/AuthModal/AuthInput/AuthInput'
import OAuthButton from '@/components/Modal/AuthModal/OauthButton/OAuthButton'

const AuthModal = () => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, error, loading] = useAuthState(auth);
  const handleAuthModal = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  useEffect(() => {
    if (user) handleAuthModal();
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleAuthModal} size={{ base: 'sm', md: 'xl' }}  >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {modalState.view === "login" && "WELCOME BACK 😋"}
            {modalState.view === "register" && "WELCOME "}
            {modalState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>


          <ModalCloseButton />

          <ModalBody className="flex flex-col items-center justify-center ">
            <Flex className="flex-col items-center justify-center w-full  ">
              {modalState.view === "login" || modalState.view === "register" ? (
                <>
                  <OAuthButton />

                  <p className="text-gray-500 font-bold">OR</p>
                  <AuthInput />

                </>
              ) : (
                // <ResetPassword />Hekl
                "Hello"
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
