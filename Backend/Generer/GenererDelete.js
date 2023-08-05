import { db } from "../database.js";

export const generateDelete = (query, params) => {
    try {
        return db.result(query, params);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}