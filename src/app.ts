import Express from "express";
import ToolsRoute from "./routes/tools.route";

const app = Express();

app.use(Express.json());

app.use("/tools", ToolsRoute);

export default app;