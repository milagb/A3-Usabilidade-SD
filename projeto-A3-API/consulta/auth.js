
//login route:

const { Router } = require("express")

Router.post('./signIn', async (req, res) => {
    try {
        let ckToken
        const {email, password} = req.body

        if (!email || !password){
            return res.status(400).json({error: "Please verify the informations provided. "})
        }

        const userLogin = await userLogin.findOne({email: email})  //findOne = MongoDB documentation.      

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)
            
            ckToken = await userLogin.generateAuthToken()
            console.log("ckToken: ", ckToken)

            res.cookie("cookie token",ckToken, {
                expires:new Date(Data.now() + 2589200) // expire date: 29d, 23h, 13min, 20s
            })
        
            if(!isMatch){
                res.status(400).json({error:"Invalid Credentials"})
            } else {
                res.json({message: "user Signed successfully"})
            }
        } else {
            res.status(400).json({error:"Invalid Credentials"})
        }

    } catch (err) {
        console.log("error: ",err)
    }
    


})

module.exports = Router




