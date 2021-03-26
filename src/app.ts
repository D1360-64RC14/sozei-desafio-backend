import Express from "express";
import ToolsRoute from "./routes/tools.route";
import DocsRoute from './routes/docs.route';

const app = Express();

app.use(Express.json());

app.use("/tools", ToolsRoute);
app.use("/docs", DocsRoute);

export default app;