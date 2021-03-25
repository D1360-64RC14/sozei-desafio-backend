import Express from "express";
import router from "./routes/index";

const app = Express();
app.use("/", router)

export {
    app
}