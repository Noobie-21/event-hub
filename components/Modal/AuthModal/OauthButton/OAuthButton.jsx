import { authModalState } from "@/atoms/AuthModalAtom";
import { auth, firestore } from "@/firebase/firebaseConfig";
import useUser from "@/hooks/useUser";
import { Button, Image } from "@chakra-ui/react";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

const OAuthButton = () => {
    const [signInWithGoogle, userCred, loading, error] =
        useSignInWithGoogle(auth);
    // const [user] = useAuthState(auth)

    const { eventState } = useUser()
    const { about, bannerImage } = eventState.userData;

    const setAuthModalState = useSetRecoilState(authModalState)

    const handleSubmit = async () => {

        const user = await signInWithGoogle()
        if (user) {
            const userData = user.user
            const collectionRef = doc(firestore, "Users", userData.uid);

            const userDocRef = doc(firestore, "Users", userData.uid);
            const userCred = await getDoc(userDocRef);


            await setDoc(collectionRef, {
                name: userData.displayName,
                email: userData.email,
                profileImage: !userData.photoURL
                    ? "https://firebasestorage.googleapis.com/v0/b/redditclone-8a639.appspot.com/o/posts%2FAQYPnnAnsxgFSsoTQhSB%2Fimage?alt=media&token=0f4d3d5e-2797-4cf0-a9bd-0399e5ec73d1"
                    : userData?.photoURL,
                userId: userData.uid,
                bio_data: userCred.data()?.bio_data ? userCred.data()?.bio_data : "",
                banner_image: userCred.data()?.banner_image ? userCred.data()?.banner_image : ""
            });
        }
        setAuthModalState(prev => ({
            ...prev,
            open: false
        }))
    }

    return (
        <div className="flex justify-center w-full mb-4 ">
            <Button
                className="bg-violet-400 hover:bg-violet-300 hover:text-black"
                isLoading={loading}
                onClick={handleSubmit}
            >
                <Image
                    src={"images/googlelogo.png"}
                    height={"20px"}
                    className="mr-2"
                />
                Continue with Google
            </Button>
            {error && <p>{error.message}</p>}
        </div>
    );
};

export default OAuthButton;
