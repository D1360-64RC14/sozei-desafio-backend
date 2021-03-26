import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    title: string;

    @Column({
        nullable: false
    })
    link: string;

    @Column({
        nullable: false
    })
    description: string;

    @Column('text', {
        array: true
    })
    tags: string[];
}
