const mongoose = require (`mongoose`);
const Personage = require (`./src/api/models/personages.model`);

const personages = [
    {name : `Princesa Bean`, description : `Bean es la joven princesa rebelde de Dreamland, conocida por su amor por la bebida y su espíritu independiente. A menudo se ve atrapada entre las expectativas de la realeza y su deseo de vivir una vida más aventurera y auténtica.`, personality : ` Es valiente, ingeniosa y a menudo sarcástica. A pesar de su comportamiento irreverente, se preocupa profundamente por sus amigos y por hacer lo correcto.`, race : `Humana` },
    {name : `Elfo`, description : `Elfo es un elfo joven que huye de su hogar en Elfwood en busca de aventuras y experiencias nuevas. Es curioso, ingenuo y tiene una visión idealizada del mundo.`, personality : `Tiene un corazón noble y está constantemente buscando la bondad en las personas y el mundo que lo rodea. Su inocencia a menudo lo mete en problemas, pero su lealtad hacia Bean y sus amigos es inquebrantable.`, race : `Elfo` },
   {name : `Luci`, description : ` Luci es un pequeño demonio personal enviado para tentar a Bean, pero termina convirtiéndose en su amigo cercano. A menudo se muestra como un consejero cínico y sarcástico.`, personality : ` A pesar de su naturaleza demoníaca, Luci muestra un lado amable y compasivo en momentos clave. Tiene una relación única con Bean y Elfo, alternando entre bromas mordaces y consejos útiles.`, race : `Demonio` },
   {name : `Rey Zøg`, description : ` Zøg es el rey de Dreamland y el padre de Bean. Es un líder autoritario pero incompetente que lucha por mantener el control sobre su reino y su propia familia.`, personality : `Es testarudo, terco y a menudo egoísta, pero también muestra un lado vulnerable y preocupado por el bienestar de su hija. A lo largo de la serie, lucha por equilibrar sus responsabilidades como rey con sus deseos personales.`, race : `Humano` },
   {name : `Reina Oona`, description : ` Oona es la segunda esposa de Zøg y madrastra de Bean. Es una reina de Maru, un reino vecino de Dreamland, y a menudo se encuentra en conflicto con Bean y su familia.`, personality : ` Oona es astuta, manipuladora y ambiciosa. Aunque inicialmente parece ser una antagonista, su personaje se desarrolla a lo largo de la serie, revelando capas de vulnerabilidad y determinación.`, race : `Mujer anfibia` },
   {name : `Príncipe Derek`, description : ` Derek es el hermano menor de Bean y el príncipe heredero de Dreamland después de que Merkimer es transformado en cerdo. Aunque inicialmente parece un personaje tonto y débil, muestra un gran potencial a lo largo de la serie.`, personality : `Derek es amable, inocente y un poco torpe. A medida que la serie avanza, comienza a encontrar su propio camino y a demostrar que es más capaz de lo que la gente cree.`, race : `Niño anfibio` },
   {name : `Reina Dagmar`, description : `Dagmar es la madre de Bean y la ex esposa de Zøg. Aparece en la segunda temporada y tiene un papel importante en la trama general de la serie.`, personality : `Dagmar es enigmática, manipuladora y aparentemente malvada. Sus verdaderas intenciones y motivaciones son un misterio durante gran parte de la serie, lo que la convierte en uno de los personajes más intrigantes.`, race : `Humana` },
   {name : `Sorcerio`, description : ` Sorcerio es el consejero real de Dreamland y uno de los personajes más sabios y poderosos de la serie. A menudo ofrece consejos a Bean y a la familia real, aunque a veces sus intenciones pueden ser cuestionables.`, personality : `Es misterioso, astuto y posee un gran conocimiento de la magia y los asuntos políticos de Dreamland. Aunque a veces parece egoísta y manipulador, en el fondo se preocupa por el bienestar del reino.`, race : `Humano` },
   {name : `Vip`, description : ` La Sirena tiene la apariencia típica de una sirena: la parte superior de su cuerpo es humana, mientras que la parte inferior es la de un pez. Suele tener una cola de pez de colores vivos, con escamas relucientes y aletas elegantes.`, personality : ` La Sirena es conocida por su belleza deslumbrante y su voz encantadora. A menudo se la representa como un ser seductor y encantador que utiliza su atractivo para manipular a otros personajes. Sin embargo, también puede mostrar un lado más vulnerable y emocional, especialmente cuando se trata de sus propios deseos y ambiciones.`, race : `Sirena` }
];



const personagesDocument = personages.map(personage => new Personage(personage));

mongoose.connect('mongodb+srv://irenemoraleess22:irene100501@cluster0.4sd5ogo.mongodb.net/desencanto?retryWrites=true&w=majority&appName=Cluster0')
 

  .then(async () => {
    await Personage.insertMany(personagesDocument);
  })
  .catch((error) => console.log(error))
  .finally(() => mongoose.disconnect());