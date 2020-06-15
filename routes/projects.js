const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// router test
router.get('/test', (req, res) => {
  res.send('DEU CERTO');
});

// add post
router.post('/add', (req, res) => {
  let {title, description, salary, comission, company, email, new_project} = req.body;

  // insert
  Project.create({
    title,
    description,
    salary,
    comission,
    company,
    email,
    new_project
  })
  .then(()=> res.redirect('/'))
  .catch(err => console.log(err));
});
module.exports = router;
