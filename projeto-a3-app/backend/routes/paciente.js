const express = require('express')
const router = express.Router()

const Paciente = require('../modules/Paciente')

router.use(express.json())


router.post('/add',(req, res, next) => {
    
    let paciente = new Paciente ({
        cpf:   req.body.cpf,
        name:   req.body.name,
        email:   req.body.email,
        phone: req.body.phone
    })
    paciente.save()
    .then(paciente => {
        res.json({
            message : 'paciente created successfully!',
            paciente
        })
    }).catch(err => {
        res.status(500).json({
            message : "An error occured"+err
        }
        )
    })}
)

router.delete("/delete", (req, res, next) => {
    let pacienteID = req.body.pacienteID

    Paciente.findOneAndRemove(pacienteID)
    .then(() => {
       res.json({ 
        message: "paciente apagada"
    })
    })
    .catch((err) => {
        res.json({
            message: "um erro ocorreu"
        })
    })
})

router.post('/update', (req, res, next) => {
    let pacienteID = req.body.pacienteID

    let pacienteData = {
        cpf:   req.body.cpf,
        name:   req.body.name,
        email:   req.body.email,
        phone: req.body.phone
    }

    Paciente.findByIdAndUpdate(pacienteID, {$set: pacienteData})
    .then(() =>{
        res.json({
            message: 'paciente modificada'
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            message: 'um erro ocorreu'
        })
    })

})

router.get('/list', (req, res, next) => {
    try{
        Paciente.find(req.body).then((response) =>{
            res.status(200).json({response})
        })
        
    }
    catch(err){
        res.status(500).send(err)
    }

})

module.exports = router

