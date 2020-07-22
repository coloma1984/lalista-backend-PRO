const SavedList = require('../models/SavedList');

const savedListCtrl = {};

savedListCtrl.getList = async (req, res) => {
    const lists = await SavedList.find();
    res.json(lists);
}

savedListCtrl.createList = async (req, res) => {
    const newList = new SavedList(req.body);
    await newList.save();
    res.json({
        'status': 'List saved'
    })
}

savedListCtrl.getOneList = async (req, res) => {
    console.log(req.params);
    const savedList = await SavedList.findById(req.params.id);
    res.json(savedList)
}

savedListCtrl.updateList = async (req, res) => {
    // dentro de las llaves significa que coge el parámetro id dentro de req.params
    const { id } = req.params;
    const savedList = {
        userId: req.body.userId,
        list: req.body.list,
        timestamps: true
    };
    //el metodo $set es de MongoDB
    await SavedList.findByIdAndUpdate(id, {$set: savedList}, {new: true})
    res.json({status: 'Lista modificada'})
}

savedListCtrl.deleteList = async (req, res) =>{
    await SavedList.findByIdAndDelete(req.params.id);
    res.json({status: 'Lista eliminada'})
}


module.exports = savedListCtrl;