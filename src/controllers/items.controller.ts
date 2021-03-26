import { Connection } from "typeorm"
import { Item } from "../entity/Item"

class ItemController {
    private conn: Connection;

    create(title: string, link: string, description: string, tags: string[]) {
        const item = new Item();

        item.title       = title;
        item.link        = link;
        item.description = description;
        item.tags        = tags;

        return this.conn.getRepository(Item).save(item);
    };

    read() {
        return this.conn.getRepository(Item).createQueryBuilder().getMany();
        
    };

    readByID(id: number) {
        return this.conn.getRepository(Item).createQueryBuilder().whereInIds(id).getOne()
    }

    removeByID(id: number) {
        return this.conn.getRepository(Item).createQueryBuilder().where({id}).delete().execute();
    };

    async readItemsByTag(tag: string) {
        /** 
         * Eu sei que a melhor alternativa seria fazer a pesquisa
         * utilizando a própria base de dados, porém por não
         * saber como fazer, e estar perdendo muito tempo (4 HORAS
         * quebrando a cabeça), fiz assim.
        **/
        return this.read().then(items => items.filter(value => value.tags.includes(tag)));
    };

    set connection(newConn: Connection) {
        this.conn = newConn;
    };
    get connection() {
        return this.conn
    };
}

const item = new ItemController();

export default item;