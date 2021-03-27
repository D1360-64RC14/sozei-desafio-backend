import { Connection } from "typeorm"
import { Tool } from "../entity/Tool"

class ToolController {
    private conn: Connection;

    create(title: string, link: string, description: string, tags: string[]) {
        const tool = new Tool();

        tool.title       = title;
        tool.link        = link;
        tool.description = description;
        tool.tags        = tags;

        return this.conn.getRepository(Tool).save(tool);
    };

    read() {
        return this.conn.getRepository(Tool).createQueryBuilder().getMany();
        
    };

    readByID(id: number) {
        return this.conn.getRepository(Tool).createQueryBuilder().whereInIds(id).getOne()
    }

    removeByID(id: number) {
        return this.conn.getRepository(Tool).createQueryBuilder().where({id}).delete().execute();
    };

    async readToolsByTag(tag: string) {
        /** 
         * Eu sei que a melhor alternativa seria fazer a pesquisa
         * utilizando a própria base de dados, porém por não
         * saber como fazer, e estar perdendo muito tempo (4 HORAS
         * quebrando a cabeça), fiz assim.
        **/
        return this.read().then(tools => tools.filter(value => value.tags.includes(tag)));
    };

    set connection(newConn: Connection) {
        this.conn = newConn;
    };
    get connection() {
        return this.conn
    };
}

const tool = new ToolController();

export default tool;