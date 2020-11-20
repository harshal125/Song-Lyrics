const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactdance', {useNewUrlParser: true});
const port = 80;


// Define mongoes schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

//compiling 
const contact = mongoose.model('contact', contactSchema);


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, "views")) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res)=>{
    const mydeta = new contact(req.body);
    mydeta.save().then(()=>{
        res.send("This item has been save to the detabase")
    }).catch(()=>{
        res.status(400).send("The item was not save into the detabase")
    });
    // res.status(200).render('contact.pug', params);
})

app.get('/about', (req, res)=>{
    const params = {}
    res.status(200).render('about.pug', params);
})










// Secondry pages requests
app.get('/shreya',(req, res)=>{
    const params = {}
    res.status(200).render('shreya.pug', params);
})

app.get('/atif',(req, res)=>{
    const params = {}
    res.status(200).render('atif.pug', params);
})

app.get('/neha',(req, res)=>{
    const params = {}
    res.status(200).render('neha.pug', params);
})

app.get('/darshan',(req, res)=>{
    const params = {}
    res.status(200).render('darshan.pug', params);
})

app.get('/arjit',(req, res)=>{
    const params = {}
    res.status(200).render('arjit.pug', params);
})

app.get('/ar1',(req, res)=>{
    const params = {}
    res.status(200).render('ar1.pug', params);
})

app.get('/guru',(req, res)=>{
    const params = {}
    res.status(200).render('guru.pug', params);
})

app.get('/hony',(req, res)=>{
    const params = {}
    res.status(200).render('hony.pug', params);
})

app.get('/tulasi',(req, res)=>{
    const params = {}
    res.status(200).render('tulasi.pug', params);
})



// Home vertical bar pages
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})




// Shreya vertical menu
app.get('/hangover',(req, res)=>{
    const params = {}
    res.status(200).render('songshreya/hangover.pug', params);
})

app.get('/mastani',(req, res)=>{
    const params = {}
    res.status(200).render('songshreya/mastani.pug', params);
})

app.get('/tumakolekar',(req, res)=>{
    const params = {}
    res.status(200).render('songshreya/tumakolekar.pug', params);
})
app.get('/judaiyaan',(req, res)=>{
    const params = {}
    res.status(200).render('songshreya/judaiyaan.pug', params);
})
app.get('/NaWhoMe',(req, res)=>{
    const params = {}
    res.status(200).render('songshreya/NaWhoMe.pug', params);
})
app.get('/BakiHai',(req, res)=>{
    const params = {}
    res.status(200).render('songshreya/BakiHai.pug', params);
})
app.get('/LagiNachute',(req, res)=>{
    const params = {}
    res.status(200).render('songshreya/LagiNachute.pug', params);
})
app.get('/bahara',(req, res)=>{
    const params = {}
    res.status(200).render('songshreya/bahara.pug', params);
})
app.get('/FhirSeTitle',(req, res)=>{
    const params = {}
    res.status(200).render('songshreya/FhirSeTitle.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})



// darshan vertical menu
app.get('/HavaBanke',(req, res)=>{
    const params = {}
    res.status(200).render('songsdarshan/HavaBanke.pug', params);
})
app.get('/EkTarfa',(req, res)=>{
    const params = {}
    res.status(200).render('songsdarshan/EkTarfa.pug', params);
})
app.get('/TereNal',(req, res)=>{
    const params = {}
    res.status(200).render('songsdarshan/TereNal.pug', params);
})
app.get('/BhulaDunga',(req, res)=>{
    const params = {}
    res.status(200).render('BhulaDunga.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})
app.get('/hindi',(req, res)=>{
    const params = {}
    res.status(200).render('hindi.pug', params);
})





// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
