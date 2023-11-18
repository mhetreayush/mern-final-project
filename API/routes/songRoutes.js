import express from "express";
import multer from "multer";
import {
  streamSong,
  addSong,
  deleteSong,
  getSongs,
} from "../controllers/songController.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/", getSongs);
router.post("/upload", upload.single("file"), addSong);
router.delete("/delete/:id", deleteSong);
router.get("/stream/:id", streamSong);

export default router;

