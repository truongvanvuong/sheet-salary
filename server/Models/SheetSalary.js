import mongoose from 'mongoose';

const sheetSalary = new mongoose.Schema({
  totaldays: { type: Number },
  totalhours: { type: Number },
  morningshifdays: { type: Number },
  nightshiftdays: { type: Number },
  allowance: { type: Number },
  totalsalary: { type: Number },
  createdAt: { type: Date, default: Date.now },
});
sheetSalary.index({ createdAt: 1 });
export default mongoose.model('SheetSalary', sheetSalary);
