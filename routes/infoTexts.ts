import { Router } from "express";
import { deleteInfoText, getInfoText, getInfoTexts, postInfoText, putInfoText } from "../controllers/infoTexts";

const router = Router();

router.get("/", getInfoTexts );
router.get("/:id", getInfoText );
router.post("/", postInfoText );
router.put("/:id", putInfoText );
router.delete("/:id", deleteInfoText );




export default router;
