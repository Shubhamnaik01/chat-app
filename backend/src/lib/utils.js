import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  }); // =/\= Above we are generating a token

  //   ==\/== Below we are sending Token to the user in a cookie
  // Cookie will have name as JWT as mentioned(any name can be used, token created is passed, Options)
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // As we have to provide value in millieseconds so we add 7 days in milliseconds
    httpOnly: true, // This prevents XSS attacks, Prevents malicious JS from reading the cookie in the browser. So document.cookie will not show the cookie
    sameSite: "strict", // This prevents CSRF attacks, Blocks the cookie from being sent with cross-site requests.
    secure: process.env.NODE_ENV !== "development", // In development secure will be false as app will be accessed as http
  });

  return token;
};
