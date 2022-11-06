const express = require("express");
const path = require('path'); //additional for any path



const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));//additional for any path
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) =>{
    res.render('aboutus');
})




app.all('*', (req, res) => {
    res.status(404).send('404! PAGE NOT FOUND');
  });

app.listen(3000,() =>{
    console.log('Listening on port 3000.');
})