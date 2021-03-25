import { app } from "./app";
import Logger from "./utils/logger";
import DotEnv from "dotenv";

DotEnv.config();

// === Padrões ===
// Porta   : 3000
// Hostname: localhost
const DEFAULT_PORT     = "3000";
const DEFAULT_HOSTNAME = "localhost";

app.listen(
    parseInt(process.env.SERVER_PORT || DEFAULT_PORT),
    process.env.SERVER_HOSTNAME || DEFAULT_HOSTNAME,
    () => {
        Logger.success(`Server iniciado na porta ${process.env.SERVER_PORT}`);
    }
);