import express from 'express';
const router = express.Router();
import EquipoController from '../controller/equipo_controller';

router.post('/save-equipo', EquipoController.saveEquipo);
router.get('/equipos', EquipoController.getEquipos);
router.get('/equipo/:id', EquipoController.getEquipo);
router.put('/update-equipo/:id', EquipoController.updateEquipo);
router.delete('/delete-equipo/:id', EquipoController.deleteEquipo);

export default router;