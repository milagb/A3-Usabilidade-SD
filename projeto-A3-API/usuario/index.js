const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())

const usuarios={}
let organizer = 0

app.post('/usuario',(req, res) =>{
organizer++

const{texto} = req.body
usuarios[organizer] = {organizer, texto}
// await axios.post("http://localhost:")
})



try {
    app.listen(4000, () => console.log('Usuário. Porta 4000'))
} catch (error) {
    console.log(error)
}