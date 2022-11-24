"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const infoTexts_1 = __importDefault(require("./routes/infoTexts"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/infoTexts", infoTexts_1.default);
app.listen(process.env.PORT || 3001, () => {
    console.log(`runnig in port ${process.env.PORT || 3001}`);
});
//# sourceMappingURL=app.js.map