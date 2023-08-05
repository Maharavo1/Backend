import pgPromise from "pg-promise";

const pgp = pgPromise();


export const db = pgp({
    host: "localhost",
    port: 5432,
    database: "hotelly",
    user: "postgres",
    password: "root",
});


db.connect()
    .then(obj => {
        console.log('Connecté à la base de données avec succès.');
        obj.done(); 
    })
    .catch(error => {
        console.error('Erreur de connexion à la base de données:', error);
    });
