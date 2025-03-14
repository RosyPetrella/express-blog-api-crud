/* Come prima cosa, creiamo un controller per i nostri post, 
in una cartella controllers.
All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna
 la logica delle funzioni che attualmente si trovano nel router 
 (al momento restituiscono solo dei messaggi).
Poi torniamo sul file delle rotte. 
Qui importiamo le funzioni dichiarate nel controller e 
le associamo alle varie rotte, come visto in classe.
Testiamo su postman se chiamando gli endpoint riceviamo effettivamente 
le stesse risposte che avevamo prima.
Se tutto funziona, passiamo alla prossima milestone*/

const express = require("express");
const app = express();
const port = 3003;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
