const proffys = [
    {
        name: "Gisele",
        avatar: "https://avatars1.githubusercontent.com/u/26143356?s=460&u=bd913206764b35dfa365b3226f84f896b161e7d6&v=4",
        whatsapp: " 41 994343434",
        bio: "blablablablablblablbala",
        subject:"Pedagogia",
        cost: "20",
        weekday: [
            0
        ],
        time_from: [720],
        time_to: [1220]


    }
]

const subjects = [

"Arte",
"Biologia",
"Ciências",
"Educação Física",
"Geografia",
"Historia",
"Matemática",
"Português",
"Química"


]

const weekdays = [
"Domingo",
"Segunda-feira",
"Terça-feira",
"Quarta-feira",
"Quinta-feira",
"Sexta-feira",
"Sábado",


]

function getSubject (subjectNumber) {

    const index = +subjectNumber -1;
    return subjects[index]
}

function pageLading (req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays})
}

function pageGiveClasses (req, res) {
    const datas = req.query

    const isNotEmpty = Object.keys(datas).length != 0
    // if have datas

      if (isNotEmpty) {

        datas.subject = getSubject(datas.subject)

          // add datas in list of objects (proffys)
        proffys.push(datas)
        
        return res.redirect("/study")
      }
    // else
   
    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()

// configuration nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure("src/pages", {
    express: server,
    noCache: true
})

// configuration static files
server.use(express.static("public")) 
// routes app
.get("/",  pageLading)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

// port heroku
const PORT= process.env.PORT || 5500
server.listen(PORT)