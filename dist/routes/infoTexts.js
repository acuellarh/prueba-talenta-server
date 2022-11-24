"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const infoTexts_1 = require("../controllers/infoTexts");
const router = (0, express_1.Router)();
router.get("/", infoTexts_1.getInfoTexts);
router.get("/:id", infoTexts_1.getInfoText);
router.post("/", infoTexts_1.postInfoTexts);
router.put("/:id", infoTexts_1.putInfoText);
router.delete("/:id", infoTexts_1.deleteInfoText);
exports.default = router;
//# sourceMappingURL=infoTexts.js.map