import { randomUUID } from "node:crypto";

export class Contact {
    readonly id: string;
    name: string;
    email: string;
    phone: string;
    created_at?: Date;
    user_id?: string ;

    constructor(){
        this.id = randomUUID();
        this.created_at = new Date()
    }
}
