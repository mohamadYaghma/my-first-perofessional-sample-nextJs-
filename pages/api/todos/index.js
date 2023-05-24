import { Todos } from "@/data";

export default function todos(req , res ) {
    return res.status(200).json({todos : Todos})
}