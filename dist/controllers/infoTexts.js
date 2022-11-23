"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInfoText = exports.putInfoText = exports.postInfoText = exports.getInfoText = exports.getInfoTexts = void 0;
const getInfoTexts = (req, res) => {
    res.json({
        msg: "getInfoTexts"
    });
};
exports.getInfoTexts = getInfoTexts;
const getInfoText = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getInfoText",
        id
    });
};
exports.getInfoText = getInfoText;
const postInfoText = (req, res) => {
    const { body } = req;
    res.json({
        msg: "postInfoText",
        body
    });
};
exports.postInfoText = postInfoText;
const putInfoText = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: "putInfoText",
        id,
        body
    });
};
exports.putInfoText = putInfoText;
const deleteInfoText = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "deleteInfoText",
        id
    });
};
exports.deleteInfoText = deleteInfoText;
//# sourceMappingURL=infoTexts.js.map