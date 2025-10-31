import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; //<<<--- Here we have used cookies.jwt because we used the name jwt while creating the cookie so if used thjjfjf we will use thjjfjf

    if (!token) {
      return res
        .status(400)
        .json({ message: "Unauthorised - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorised - Invalid Token" });
    }
    const user = await User.findById(decoded.userId).select("-password"); // Expect password everything will be sent. // Here userID is used because we have given the same name while creating the token

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ message: " Internal Server error" });
  }
};
