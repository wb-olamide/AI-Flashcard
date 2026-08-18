import jwt from "jsonwebtoken";
import User from "../models/user.js";

// export const protect = async (req, res, next) => {
//   let token;

//   try {
//     if (req.headers.authorization?.startswith("Bearer")) {
//       token = req.headers.authorization.split(" ")[1];

//       const decoded = jwt.compare(token, process.env.JWT_SECRET);

//       req.user = await User.findById(decoded.id).select("-password");

//       next();
//     }
//   } catch (error) {
//     return res.status(401).json({ message: "No token" });
//   }
// };
export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const admin = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Admin Only" });
  }
};
