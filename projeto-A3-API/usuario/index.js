const express = require('express')
const axios = require('axios')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// app.use(express.json())

const usuarios={}
let organizer = 0

app.post('/',(req, res) =>{
try {

    organizer++

    const{ nome } = req.body
    const{email} = req.body
    const{telefone} = req.body
    const{cpf} = req.body
    const{crm} = req.body
    const{senha} = req.body


    usuarios[organizer] = {organizer, nome, email, telefone, cpf, senha, crm}
    //(inserir) consulta de consultas - usuario verifica consulta marcada.
    res.status(201).send(usuarios[organizer])
} catch (error) {
   console.log(error) 
}
})

app.get('/', (req,res) =>{
    res.send(usuarios)
})


try {
    app.listen(4000, () => console.log('Usuário. Porta 4000'))
} catch (error) {
    console.log(error)
}