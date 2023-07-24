import {
  AuthError,
  EmailAuthProvider,
  User,
  reauthenticateWithCredential,
} from "firebase/auth";
import { SetStateAction } from "react";
import { Dispatch } from "react";

type PasswordProps = {
  old_password: string;
  new_password: string;
  confirm_new_password: string;
};

interface submitHandlerProps {
  password: PasswordProps;
  setPassword: Dispatch<SetStateAction<PasswordProps>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<boolean>>;
  setFormError: Dispatch<SetStateAction<PasswordProps>>;
  updatePassword: any;
  email: string;
  user: User | null | undefined;
  updatingError: AuthError | Error | undefined;
}

const submitHandler = async ({
  password,
  setLoading,
  setPassword,
  setError,
  setFormError,
  updatePassword,
  email,
  user,
  updatingError,
}: submitHandlerProps) => {
  const intitialErrorState = {
    old_password: "",
    new_password: "",
    confirm_new_password: "",
  };
  const { confirm_new_password, new_password, old_password } = password;

  if (old_password.trim().length < 8) {
    setError(true);
    setFormError({
      ...intitialErrorState,
      old_password: "Password must be greate than 8",
    });
  } else if (new_password.trim().length < 8) {
    setError(true);
    setFormError({
      ...intitialErrorState,
      new_password: "Password must be greate than 8",
    });
  } else if (confirm_new_password.trim().length < 8) {
    setError(true);
    setFormError({
      ...intitialErrorState,
      confirm_new_password: "Password must be greate than 8",
    });
  } else if (new_password !== confirm_new_password) {
    setError(true);
    setFormError({
      ...intitialErrorState,
      new_password: "Password does not match",
      confirm_new_password: "Password does not match",
    });
  } else {
    setError(false);
    setFormError(intitialErrorState);

    try {
      if (user) {
        const creditial = EmailAuthProvider.credential(email, old_password);
        await reauthenticateWithCredential(user, creditial);
        return;
      }
      const success = await updatePassword(confirm_new_password);
      if (success) {
        alert("password Updating succesfully!");
      }
    } catch (error: any) {
      if (error.code === " auth/wrong-password") {
        setError(true);
        setFormError({
          ...intitialErrorState,
          old_password: "Wrong Password",
        });
      } else if (error.code === "auth/too-many-requests") {
        setError(true);
        setFormError({
          ...intitialErrorState,
          old_password: "Please try again later",
        });
      }
      //   console.log(updatingError?.message);
    }
  }
};

export default submitHandler;
