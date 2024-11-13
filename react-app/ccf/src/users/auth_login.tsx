import { signInWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { auth } from "../index"

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Successfully signed in");
    return { user: userCredential.user, error: null };
  } catch (err: any) {
    let errorMessage = "An unexpected error occurred";
    if (err.code === AuthErrorCodes.INVALID_PASSWORD || err.code === AuthErrorCodes.USER_DELETED) {
      errorMessage = "The email address or password is incorrect";
    }
    return { user: null, error: errorMessage };
  }
};