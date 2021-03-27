import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product: string;

    @Column()
    title: string;

    @Column()
    price: number;

}
function primaryColumn() {
    throw new Error("Function not implemented.");
}

