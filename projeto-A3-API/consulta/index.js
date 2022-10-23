const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())

const consulta =[]
let organizer = 0

app.post('/clinica/consulta',(req, res) =>{
organizer++
try {
const exame = req.body
consulta [organizer] = {'id' :organizer, 'descricao': exame.descricao , 'dateTime': exame.dateTime, 'paciente': exame.paciente , 'medico': exame.medico , 'status': 'agendado'}
// await axios.post("http://localhost:")
res.status(200).send(consulta [organizer])

}
catch(err){
    res.status(500).send(err)
    console.log(err)
}
})

app.get('/clinica/consulta', (req,res) => {
    try{
        res.status(200).send(consulta)
    }
    catch(err){
        res.status(500).send(consulta)
    }

})


try {
    app.listen(5000, () => console.log('Consulta. Porta 5000'))
} catch (error) {
    console.log(error)
}