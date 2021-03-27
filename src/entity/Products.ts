import { text } from "body-parser";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('products')
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    slug: string;

    @Column()
    price: number;

    @Column({nullable: true })
    list_price: number;

    @Column()
    categoryId: number;

    @Column({type:'text'})
    description: number;

    @Column({nullable: true})
    Image: number;

}
function primaryColumn() {
    throw new Error("Function not implemented.");
}

