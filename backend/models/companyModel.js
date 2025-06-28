const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema(
  {
    companyName: { type: String, required: true, trim: true },
    companyAddress: { type: String, required: true, trim: true },
    companyPhone: { type: String, required: true, trim: true },
    companyEmail: { type: String, required: true, trim: true },
    companyLogo: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
