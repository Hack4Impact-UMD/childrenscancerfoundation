import {
  updatePassword,
} from "firebase/auth";
import { auth } from "../index";

// Type definition for password requirements
export interface PasswordRequirements {
    specialChar: boolean;
    capitalLetter: boolean;
    number: boolean;
  }
  
// Function to check password requirements
export const checkPasswordRequirements = (password: string): PasswordRequirements => {
  return {
    specialChar: /[\W_]/.test(password),
    capitalLetter: /[A-Z]/.test(password),
    number: /[0-9]/.test(password)
  };
};

// Change password function
export const changePassword = async (newPassword: string) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
      }
      console.log("Password changed successfully.");
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };
  