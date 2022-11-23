"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/ping", (_req, res) => {
    console.log("Hola Mundo otra vez");
    res.send("Hello Alejo");
});
app.listen(process.env.PORT || 3001, () => {
    console.log(`runnig in port ${process.env.PORT || 3001}`);
});
//# sourceMappingURL=app.js.map