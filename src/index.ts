import { app } from "./app";
import Logger from "./utils/logger";
import DotEnv from "dotenv";

DotEnv.config();

// === Padrões ===
// Porta   : 3000
// Hostname: localhost
app.listen(
    parseInt(process.env.SERVER_PORT || "3000"),
    process.env.SERVER_HOSTNAME || "localhost",
    () => {
        Logger.success(`Server iniciado na porta ${process.env.SERVER_PORT}`);
    }
);