import express from 'express';
const router = express.Router();
import {ensureAuthenticated} from '../config/auth.js';
import path from 'path';
// Welcome Page
router.get('/', (req,res) => res.render('welcome'));

//Dashboard
router.get('/dashboard', ensureAuthenticated , (req,res) => 
res.render('dashboard',{
    name: req.user.name
}));

export default router;