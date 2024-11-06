
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
  