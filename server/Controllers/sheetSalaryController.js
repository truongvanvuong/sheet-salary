import sheetSalary from '../Models/SheetSalary.js';

const createSheetSalary = async (req, res) => {
  const newSheetSalary = new sheetSalary(req.body);
  try {
    const saveSheetSalary = await newSheetSalary.save();

    res.status(200).json({
      success: true,
      data: saveSheetSalary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};
const getSheetSalary = async (req, res) => {
  try {
    const { year, month } = req.query;

    const parsedYear = parseInt(year);
    const parsedMonth = parseInt(month);

    if (isNaN(parsedYear) || isNaN(parsedMonth)) {
      return res.status(400).json({ error: 'Invalid year or month' });
    }
    const startDate = new Date(parsedYear, parsedMonth - 1, 1);
    const endDate = new Date(parsedYear, parsedMonth, 0);

    const sheetSalaryData = await sheetSalary
      .find({
        createdAt: {
          $gte: startDate,
          $lte: endDate,
        },
      })
      .populate('user');
    res.status(200).json({
      success: true,
      data: sheetSalaryData,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
const getAllSheetSalary = async (req, res) => {
  try {
    const sheetSalaryData = await sheetSalary.find({});
    res.status(200).json({
      success: true,
      data: sheetSalaryData,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export { getSheetSalary, getAllSheetSalary, createSheetSalary };
