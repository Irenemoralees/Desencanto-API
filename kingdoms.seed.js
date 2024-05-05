const mongoose = require (`mongoose`);
const kingdom = require (`./src/api/models/kingdoms.model`);
const Kingdom = require("./src/api/models/kingdoms.model");

const kingdoms = [
    {name: `Dreamland`, description: `Dreamland es un reino medieval ubicado en un mundo fantástico lleno de magia y peligros. Está gobernado por el Rey Zøg y es el escenario principal de las aventuras de Bean, Elfo y Luci. Dreamland está habitado por una variedad de criaturas y personajes, desde nobles y campesinos hasta monstruos y seres mágicos.`, ubication: `Tierra de Dreamland, en algún lugar de un universo de fantasía.`},
    {name: `Elfwood`, description: `Elfwood es el hogar ancestral de los elfos, un reino de naturaleza exuberante y mágica. Los elfos son conocidos por su conexión con la naturaleza y su habilidad en la arquería. Aunque inicialmente pacífico, Elfwood se ve envuelto en conflictos a lo largo de la serie.`, ubication: `Bosque encantado en algún lugar del mundo de Disenchantment.`},
    {name: `Infierno`, description: `El Infierno es representado como un lugar oscuro y lleno de fuego, habitado por demonios y otras criaturas infernales.`, ubication: `El más allá`},
    {name: `Maru`, description: `Maru es un reino submarino habitado por seres marinos como sirenas, tritones y criaturas marinas diversas. Se destaca por su belleza acuática y su rey, un tritón poderoso. A lo largo de la serie, Maru desempeña un papel importante en ciertas tramas.`, ubication: `En lo profundo del océano en algún lugar del mundo de Disenchantment.`}

];

const kingdomsDocument = kingdoms.map(kingdom => new Kingdom(kingdom));

mongoose.connect('mongodb+srv://irenemoraleess22:irene100501@cluster0.4sd5ogo.mongodb.net/desencanto?retryWrites=true&w=majority&appName=Cluster0')
 

  .then(async () => {
    await Kingdom.insertMany(kingdomsDocument);
  })
  .catch((error) => console.log(error))
  .finally(() => mongoose.disconnect());