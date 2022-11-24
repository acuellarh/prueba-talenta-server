"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInfoText = exports.putInfoText = exports.postInfoTexts = exports.getInfoText = exports.getInfoTexts = void 0;
let arrayInfoTexts = [];
const getInfoTexts = (req, res) => {
    try {
        res.status(200).json(arrayInfoTexts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Validar con el administrador"
        });
    }
};
exports.getInfoTexts = getInfoTexts;
const getInfoText = (req, res) => {
    const id = parseInt(req.params.id);
    try {
        let infoTextId = arrayInfoTexts.find(item => item.id === id);
        if (infoTextId) {
            return res.status(200).json(infoTextId);
        }
        res.status(400).json({
            msg: "Elemento no encontrado"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Validar con el administrador"
        });
    }
};
exports.getInfoText = getInfoText;
const postInfoTexts = (req, res) => {
    const { dataText } = req.body;
    try {
        if (dataText === "") {
            return res.status(400).json({
                msg: "El campo esta vacio"
            });
        }
        const newInfoText = {
            id: new Date().valueOf(),
            text: dataText
        };
        arrayInfoTexts.push(newInfoText);
        res.status(200).json(arrayInfoTexts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Validar con el administrador"
        });
    }
};
exports.postInfoTexts = postInfoTexts;
const putInfoText = (req, res) => {
    const id = parseInt(req.params.id);
    const { dataText } = req.body;
    try {
        arrayInfoTexts = arrayInfoTexts.map((item) => {
            if (item.id === id) {
                item.text = dataText;
                return item;
            }
            return item;
        });
        res.status(200).json(arrayInfoTexts);
    }
    catch (error) {
        res.status(500).json({
            msg: "Validar con el administrador"
        });
    }
};
exports.putInfoText = putInfoText;
const deleteInfoText = (req, res) => {
    const id = parseInt(req.params.id);
    try {
        arrayInfoTexts = arrayInfoTexts.filter((item) => item.id !== id);
        res.status(200).json({
            msg: "Texto Eliminado"
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Validar con el administrador"
        });
    }
};
exports.deleteInfoText = deleteInfoText;
//# sourceMappingURL=infoTexts.js.map