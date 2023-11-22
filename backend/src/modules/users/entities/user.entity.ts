import { Exclude } from "class-transformer";
import { randomUUID } from "node:crypto";

export class User {
    readonly id: string;
    name: string;
    email: string;

    @Exclude()
    password: string;
    
    phone: string;
    created_at: Date;
    contacts?: any ;

    constructor(){
        this.id = randomUUID();
        this.created_at = new Date()
    }
}
