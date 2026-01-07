import "./src/config/env.js"; // FIRST
import app from "./src/app.js";
import connectDB from "./src/config/db.js";
const startServer = async () => {
  try {
    await connectDB(); // 🔥 WAIT for DB
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server start failed:", error.message);
    process.exit(1);
  }
}; 

startServer();
