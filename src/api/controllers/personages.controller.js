const Personage = require (`../models/personages.model`);
const kingdom = require (`../models/kingdoms.model`)



const personageSelect = async (req, res) => {
const personages = await Personage.find ()
.populate({path:`kingdom`, select: `name`})
return res.status (200).json(personages)
};

const selectOnePersonage = async (req, res) => {
    try {
        const {id} = req.params;
        const findPersonage = await Personage.findOne ({_id: id})
        return res.status (200).json(findPersonage)
    } catch (error) {
        console.log(error)
        return res.status (500).json (error)
    }
};

const personageAdd = async (req, res) => {
    try{
    const newPersonage = new Personage (req.body)
    const createdPersonage = await newPersonage.save();
    return res.json(createdPersonage)
} catch (error) {
    console.log(error)
    return res.status (500).json (error)
}
};

const personageUpdate = async (req, res) => {
    try {
        const personagesId= req.params.id;
        const kingdomsId= req.body._id
       
        const updatePersonage = await Personage.findByIdAndUpdate(personagesId, {$push:{kingdom:kingdomsId}},{ new: true });
        console.log(updatePersonage)
        if (!updatePersonage) {
            return res.status(404).json({ message: "El personaje no ha sido encontrado" })
        }
        return res.status(200).json(updatePersonage)

    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

};




module.exports = {personageSelect, selectOnePersonage, personageAdd, personageUpdate};