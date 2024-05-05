const Kingdom = require (`../models/kingdoms.model`);

const kingdomDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteKingdom = await Kingdom.findByIdAndDelete(id);
        if (!deleteKingdom) {
            return res.status(404).json({ message: "El reino no ha sido encontrado" })
        }
        return res.status(200).json(deleteKingdom)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

};

const kingdomUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const kingdomBody = new Kingdom(req.body)
        kingdomBody._id = id;
        const updateKingdom = await Kingdom.findByIdAndUpdate(id, kingdomBody, { new: true })
        console.log(updateKingdom)
        if (!updateKingdom) {
            return res.status(404).json({ message: "El reino no ha sido encontrado" })
        }
        return res.status(200).json(updateKingdom)

    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

};

module.exports= {kingdomDelete, kingdomUpdate};