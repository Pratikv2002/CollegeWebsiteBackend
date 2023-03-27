const mongoose = require("mongoose");

const studyMaterial = new mongoose.Schema({
  Branch: {
    type: String,
    required: true,
  },
  Classes: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },
  Material: {
    data: Buffer,
    contentType: String,
    // required:true
  },
  FileName: {
    type: String,
  },
  Size: {
    type: Number,
  },
  AdminId: {
    type: String,
  },
  AdminEmail: {
    type: String,
  },
  AdminName: {
    type: String,
  },
  Admin: {
    type: Boolean,
  },
  Time: {
    type: Date,
    default: new Date(),
  },
});

const uploadStudyMaterialModel = mongoose.model("studyMaterial", studyMaterial);

module.exports = uploadStudyMaterialModel;
