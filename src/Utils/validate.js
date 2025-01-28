export const checkValidData = (email, password ) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
        return "Invalid email format. Ensure it includes '@' and a valid domain.";
    }
    if (!passwordRegex.test(password)) {
        return "Password must be at least 8 characters long, containing both letters and numbers.";
    }

    return null; // Both are valid
};
