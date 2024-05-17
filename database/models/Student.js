/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://www.swic.edu/wp-content/uploads/2017/05/Math-Science-Computer-Science-DSC0381.jpg'
  },
  campusId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  GPA: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0, //We'll use 4.0 scale since that's what HUnter uses
      max: 4.0
    }
  }
});

// Export the student model
module.exports = Student;
