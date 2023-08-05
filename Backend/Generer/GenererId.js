import { db } from "../database.js";

export const generateId = (query, id) => {
    try {
        return db.query(query, id);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}
