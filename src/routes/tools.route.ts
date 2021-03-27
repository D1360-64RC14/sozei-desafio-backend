import { Router } from "express";
import ToolsController from "../controllers/tools.controller"
import { ToolValidator, ToolSchema } from "../utils/toolsValidator"

const routeTools = Router();

routeTools

.get("/", (req, res) => {
    if(req.query.tag) {
        const tag = String(req.query.tag)
        ToolsController.readToolsByTag(tag).then(tools => {
            res.status(200).json(tools)
        })
    } else {
        ToolsController.read().then(tools => {
            res.status(200).json(tools)
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
        ToolsController.readByID(id).then(tool => {
            if(tool) {
                res.status(200).json(tool);
            } else {
                res.status(404).json({
                    error: `A ferramenta com ID ${id} não foi encontrado.`
                });
            }
        });
    }
})

.post("/", (req, res) => {
    const body = req.body;
    if(ToolValidator(body) && req.headers["content-type"]?.toLowerCase() === "application/json") {
        ToolsController.create(body.title, body.link, body.description, body.tags).then(tool => {
            res.status(201).json(tool)
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
        ToolsController.removeByID(id).then(tool => {
            if(tool.affected === 0) {
                res.status(404).json({
                    error: `A ferramenta com ID ${id} não foi encontrado.`
                });
            } else {
                res.sendStatus(204)
            }
        })
    }
});

export default routeTools;