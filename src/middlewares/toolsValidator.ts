import AJV, { JSONSchemaType } from "ajv";

interface IToolSchema {
    title: string;
    link: string;
    description: string;
    tags: string[];
}

// Explicação do porquê não importei do api.schema.json:
// https://drive.google.com/file/d/1fPIMMynAwQo5FhOuyDs6jaEaimC02-LN
const ToolSchema: JSONSchemaType<IToolSchema> = {
    "type": "object",
    "properties": {
        "title": {
            "type": "string"
        },
        "link": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "tags": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    "required": ["title", "link", "description", "tags"]
}

const ajv = new AJV();

const Validator = ajv.compile(ToolSchema);

export {
    Validator,
    ToolSchema
}