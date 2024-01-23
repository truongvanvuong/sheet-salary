import express from 'express';
import {
  createSheetSalary,
  getSheetSalary,
  getAllSheetSalary,
} from '../Controllers/sheetSalaryController.js';
const router = express.Router();

router.post('/', createSheetSalary);
router.get('/salary-report', getSheetSalary);
router.get('/', getAllSheetSalary);

export default router;
