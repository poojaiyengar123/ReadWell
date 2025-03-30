import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import fs from "fs";

// Get the directory name for ES Modules
const __dirname = new URL('.', import.meta.url).pathname;

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Ensure uploads directory exists, including any missing parent directories
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true }); // This will create parent directories if they do not exist
}

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to uploads/ folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

const upload = multer({ storage });

// Upload route
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.json({ message: "File uploaded successfully", filePath: `/uploads/${req.file.filename}` });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));