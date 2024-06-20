import { RowDataPacket } from "mysql2";


    

  export interface Draudimas  extends RowDataPacket{
        id?:number;
        name:string;
        surname:string;
        phone:string;
        email:string;
        address:string;
    }