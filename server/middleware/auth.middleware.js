import jwt from "jsonwebtoken";

/**
 * Protect middleware
 * Checks if request has a valid JWT token
 * Allows access only to authenticated admin
 */
const protect = (req, res, next) => {
  try {
    // 1. Check if Authorization header exists
    if (!req.headers.authorization) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing"
      });
    }

    // 2. Extract token from "Bearer <token>"
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not found"
      });
    }

    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach admin ID to request object
    req.adminId = decoded.id;

    // 5. Continue to next middleware / controller
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, token invalid or expired"
    });
  }
};

export default protect;
