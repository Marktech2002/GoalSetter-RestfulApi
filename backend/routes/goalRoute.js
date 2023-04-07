const express = require('express');
const { model } = require('mongoose');
const { getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController');
const { protect } = require('../middleware/authMiddleware') ;
const router = express.Router();

 router.get('/', protect, getGoals);
 router.post('/' ,protect , setGoal);
 router.put('/:id' , protect , updateGoal);
 router.delete('/:id' , protect , deleteGoal);


 module.exports = router ;