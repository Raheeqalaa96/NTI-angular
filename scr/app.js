const express =require("express")
 const path = require ('path')
 const hbs = require('hbs')
 const app= express()
 const pp=path.join(__dirname,'../public')
 const vv=path.join(__dirname,'../frontend/views')
 const ll=path.join(__dirname,'../frontend/layouts')
 app.set('view engine','hbs')
 app.set('views ',vv)
 hbs.registerPartials(ll)
 
 app.use(express.static(pp))
 
  app.get('/a',(req,res)=>res.render('f'))
  app.get('/b',(req,res)=>res.render('s'))
 const PORT =3000






 app.listen(PORT)