const Sequilize = require('sequelize');
const db = require('../db/connection');

const Project = db.define('project', {
  title: {
    type: Sequilize.STRING,
  },
  description:{
    type: Sequilize.STRING,
  },
  salary: {
    type: Sequilize.STRING,
  },
  comission: {
    type: Sequilize.STRING,
  },
  company: {
    type: Sequilize.STRING,
  },
  email: {
    type: Sequilize.STRING,
  },
  new_project: {
    type: Sequilize.INTEGER,
  }
});

module.exports = Project;
