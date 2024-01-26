import mongoose from 'mongoose';

const sheetSalary = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  totaldays: { type: Number },
  totalhours: { type: Number },
  morningshifdays: { type: Number },
  nightshiftdays: { type: Number },
  allowance: { type: Number },
  totalsalary: { type: Number },
  createdAt: { type: Date, default: Date.now },
});
sheetSalary.index({ createdAt: 1 });

export default mongoose.model('sheet-salary', sheetSalary);
