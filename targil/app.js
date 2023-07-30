const path=require('path');
const express=require('express');
const app=express();
const adminRoutes=require('./routes/admin');

app.set('view engine', 'ejs');

app.use(adminRoutes);
app.use(express.static(path.join(__dirname,'public')));
/*app.use((req,res,next)=> {
    res.status(404).render('404',{pageTitle:'Page Not Found'});
});*/
app.listen(3000);