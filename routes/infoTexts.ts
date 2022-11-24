import { Router } from "express";
import { deleteInfoText, getInfoText, getInfoTexts, postInfoTexts, putInfoText } from "../controllers/infoTexts";

const router = Router();

router.get("/", getInfoTexts );
router.get("/:id", getInfoText );
router.post("/", postInfoTexts );
router.put("/:id", putInfoText );
router.delete("/:id", deleteInfoText );


export default router;
