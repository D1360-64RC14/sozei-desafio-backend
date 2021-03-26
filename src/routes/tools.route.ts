import { Router } from "express";
import ItemsController from "../controllers/items.controller"
import { Validator as ToolValidator, ToolSchema } from "../middlewares/toolsValidator"


const routeTools = Router();

routeTools

.get("/", (req, res) => {
    if(req.query.tag) {
        const tag = String(req.query.tag)
        ItemsController.readItemsByTag(tag).then(items => {
            res.status(200).json(items)
        })
    } else {
        ItemsController.read().then(items => {
            res.status(200).json(items)
        });
    }
})

.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) {
        res.status(400).json({
            error: "O parâmetro deve ser um número."
        });
    } else {
        ItemsController.readByID(id).then(item => {
            if(item) {
                res.status(200).json(item);
            } else {
                res.status(404).json({
                    error: `O item com ID ${id} não foi encontrado.`
                });
            }
        });
    }
})

.post("/", (req, res) => {
    const body = req.body;
    if(ToolValidator(body) && req.headers["content-type"]?.toLowerCase() === "application/json") {
        ItemsController.create(body.title, body.link, body.description, body.tags).then(item => {
            res.status(201).json(item)
        });
    } else {
        res.status(406).json({
            error: "O JSON ou a requisição não está no formato correto.",
            "Content-Type": "application/json",
            schema: ToolSchema
        });
    }
})

.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) {
        res.status(400).json({
            error: "O parâmetro deve ser um número."
        });
    } else {
        ItemsController.removeByID(id).then(item => {
            if(item.affected === 0) {
                res.status(404).json({
                    error: `O item com ID ${id} não foi encontrado.`
                });
            } else {
                res.sendStatus(204)
            }
        })
    }
});

export default routeTools;