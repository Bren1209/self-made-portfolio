const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./public/scripts/mail');
const flash = require('connect-flash');
const session = require('express-session')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(flash())

app.use(session({
    secret: 'still not sure what this does',
    cookie: {maxAge: 60000},
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    res.render('index', {flashMessageSuccess: req.flash('success'), flashMessageError: req.flash('error')})
})

app.get('/cv', (req, res) => {
    const name = 'Visit Notification'
    const email = 'bren-10@notification.com'
    const content = 'Someone viewed your CV.'

    sendMail(name, email, content, function(err){
        if(err){
            console.log('Error sending mail. Proceeding with page render.')
            res.render('cv')
        } else {
            res.render('cv')
        }
    })
})

app.get('/web-dev', (req, res) => {
    const name = 'Visit Notification'
    const email = 'bren-10@notification.com'
    const content = 'Someone visited your Web Developer portfolio.'

    sendMail(name, email, content, function(err){
        if(err){
            console.log('Error sending mail. Proceeding with page render.')
            res.render('web-dev')
        } else {
            res.render('web-dev')
        }
    }) 
})

app.get('/audio', (req, res) => {
    res.render('audio')
})

app.get('/music', (req, res) => {
    res.render('music')
})

app.post('/contact', (req, res) => {
    const name = req.body.name.trim()
    const email = req.body.email.trim()
    const content = req.body.content.trim()

    sendMail(name, email, content, function(err){
        if(err){
            req.flash('error', 'Something went wrong :( - Please try again or contact me directly.')
            res.redirect('/')
        } else {
            if(name){
                req.flash('success', "Thanks " + name + "! I'll get back to you soon.")
                res.redirect('/')
            } else {
                req.flash('success', "Thanks! I'll get back to you soon.")
                res.redirect('/')
            }
        }
    });
})

app.listen(process.env.PORT, process.env.IP, () => {
	console.log('Server running')
})