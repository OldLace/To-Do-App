const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
// const methodOverride = require('method-override')

//start app
const app = express()

// app.use(methodOverride('_method'))

// configuration
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//static config
app.use(express.static('public'))

//Views
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//port configuration
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`alive on ${port}`)
})

app.get('/',(req, res)=> {
    res.render('index')
})


//
//route requirement
const todoRoutes = require('./routes/routes.js')
app.use('/tasks' ,todoRoutes)

// //Show All
app.get('*' ,(req, res)=>{
    res.status(404).send('404 not found. ')
})