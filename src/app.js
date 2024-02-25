import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// Create Express server
const app = express();

app.arguments(
  cors({
    origin: process.env.CLIENT_URI,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb"}));

app.use(express.urlencoded({ extended: true, limit: "16kb"}));

app.use(express.static("public"));

app.use(cookieParser());    // Parse cookies

export default app;
