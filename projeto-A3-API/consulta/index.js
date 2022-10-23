const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())

const consulta =[]
let organizer = 0

app.post('/consulta',(req, res) =>{
organizer++
try {
const{exame} = req.body
consulta [organizer] = {'id' :organizer, 'exame': exame.descricao , 'dateTime': exame.dateTime}
// await axios.post("http://localhost:")
}
catch(err){
    res.status(500).send(err)
}
})

try {
    app.listen(5000, () => console.log('Usuário. Porta 5000'))
} catch (error) {
    console.log(error)
}