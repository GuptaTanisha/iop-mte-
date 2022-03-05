import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import stationsRoutes from './routes/stations.js';
import cors from 'cors';
import dotenv from 'dotenv';
import expressLayouts from 'express-ejs-layouts';
import flash from 'connect-flash';
import session from 'express-session';
import passport from 'passport';
import {passportConfig} from "./passport.js";
import indexRouter from './routes/index.js';
import usersRouter from './routes/userRouter.js'

passportConfig(passport);
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
dotenv.config();
const app = express();



app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.set('view engine' , 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false}));


// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect Flash
app.use(flash());

// Global Variables
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
  
  
  //ROUTES
app.use('/', indexRouter);
app.use('/users', usersRouter);
  
app.use('/stations',stationsRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.mia2p.mongodb.net/step2DB?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => app.listen(PORT,() => console.log(`Server started at ${PORT}`)))
.catch((error) => console.log(error));