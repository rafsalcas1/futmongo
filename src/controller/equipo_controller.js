import Equipo from '../models/equipo';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

let equipoController = {

  getEquipos: async (req, res) => {
    try {
      const equipos = await Equipo.find();
      res
        .status(200)
        .json(equipos);
    } catch (error) {
      res
        .status(400)
        .json({
          message: err
        });
    }
  },
  saveEquipo: async (req, res) => {
    const body = req.body;
    const equipo = new Equipo(body);
    try {
      const a1 =  await equipo.save()
      res
        .status(201)
        .json(a1);
    } catch (err) {
      res
        .status(500)
        .json({
          message: err
        });
    }
  },
  getEquipo: async (req, res) => {
    const id = req.params.id;
    try {
      const equipo = await Equipo.findById(id);
      res
        .status(200)
        .json(equipo);
    } catch (err) {
      res
        .status(400)
        .json({
          message: err
        })
    }
  },
  deleteEquipo: async (req, res) => {
    const id = req.params.id;
    try {
      const revomedEquipo = await Equipo.findByIdAndDelete(id);

      if (!revomedEquipo) {
        return res.status(404).json({
          message: err
        })
      }

      res.json(revomedEquipo)
    } catch (err) {
      res
        .status(400)
        .json({
          message: err
        })
    }
  },
  updateEquipo: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
      const updatedEquipo = await Equipo.findByIdAndUpdate(
        id,
        body,
        {new: true});

      if (!updatedEquipo) {
        return res.status(404).json({
          message: err
        })
      }
      res
        .status(200)
        .json(updatedEquipo)
    } catch (err) {
      res
        .status(500)
        .json({
          message: err
        })
    }
  }
};


export default equipoController;