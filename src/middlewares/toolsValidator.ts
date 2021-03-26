import AJV, { JSONSchemaType } from "ajv";

const ajv = new AJV()

interface IToolSchema {
    title: string;
    link: string;
    description: string;
    tags: string[];
}

const ToolSchema: JSONSchemaType<IToolSchema> = {
    type: "object",
    properties: {
        title: {
            type: "string"
        },
        link: {
            type: "string"
        },
        description: {
            type: "string"
        },
        tags: {
            type: "array",
            items: {type: "string"}
        }
    },
    required: ["title", "link", "description", "tags"]
}

const Validator = ajv.compile(ToolSchema)

export {
    Validator,
    ToolSchema
}