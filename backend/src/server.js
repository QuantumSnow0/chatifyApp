import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.route.js";
import path from "path";
import messageRoutes from "./routes/message.route.js";
const app = express();
const __dirname = path.resolve();
const port = process.env.PORT || 5000;
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// make ready for deployment
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`server listening to http://localhost:${port}`);
});
