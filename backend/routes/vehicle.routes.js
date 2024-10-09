import express from 'express';
import { getVehicles } from '../controllers/vehicle.controller.js'

const router = express.Router();

router.get("/", getVehicles);

export default router;