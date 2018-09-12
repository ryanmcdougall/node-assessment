const userData = require('./userData.json')

module.exports = {
    
    getUsers: ( req, res ) => {
        if(req.query.favorites){ 
            const users = []
                
                for(let i = 0; i < userData.length; i++){
                    for(let j = 0; j < userData[i].favorites.length; j++){
                        if(userData[i].favorites[j] === req.query.favorites){
                            users.push(userData[i])
                        }
                    }
                }
                
                res.status(200).send(users)
                
        }  else if (req.query.age) {
                
        
                            const users = [];
                        
                            console.log(req.query.age)
                    
                            for(let i = 0; i < userData.length; i++){
                                    console.log(userData[i])
                                if(userData[i].age < req.query.age){
                                    users.push(userData[i])
                                }
                            }
                    
                    if(users.length > 0){
                        res.status(200).send(users)
                    } else {
                        res.status(404).json(null)
                    }
            } else if (req.query.lastname){
                    const users = [];
                    
                    for(let i = 0; i < userData.length; i++){
                        if(userData[i].last_name === req.query.lastname){
                            users.push(userData[i])
                        }
                    }
                    if(users.length > 0){
                        res.status(200).send(users)
                    } else {
                        res.status(404).send({message: "There are no users with the last name of " + req.query.lastname})
                    }

            } else if (req.query.email){
                    const users = [];
                    
                    for(let i = 0; i < userData.length; i++){
                        if(userData[i].email === req.query.email){
                            users.push(userData[i])
                        }
                    }
                    if(users.length > 0){
                        res.status(200).send(users)
                    } else {
                        res.status(404).send({message: "There are no users with the email of " + req.query.email})
                    } 
                } else {
                    res.status(200).send(userData)
            }
    },
    getUsersById: ( req, res ) => {
        const result = userData.filter( user => user.id === +req.params.id)
            if(result[0]){
                res.status(200).send(result[0])
            } else {
                res.status(404).json(null)
            }
        console.log("result:", result)
    },
    getAllAdmins: ( req, res ) => {
        const users = []
        
        for(let i = 0; i < userData.length; i++){
            if(userData[i].type == "admin"){
                users.push(userData[i])
            } 
        }
        
        if(users.length > 0){
            res.status(200).send(users)
        } else {
            res.status(404).send({message: "There are no admins"})
        }
    },
    getAllNonAdmins: ( req, res ) => {
        const users = []
        
        for(let i = 0; i < userData.length; i++){
            if(userData[i].type !== "admin"){
                users.push(userData[i])
            } 
        }
        
        if(users.length > 0){
            res.status(200).send(users)
        } else {
            res.status(404).send({message: "There are only admins"})
        }
    }, 
    getUsersByType: ( req, res ) => {
        const users = [];

        for(let i = 0; i < userData.length; i++){
            if(userData[i].type == req.params.id){
                users.push(userData[i])
            } 
        }
        res.status(200).send(users)
    },
    updateUsersById: ( req, res ) => {

        for(let i = 0; i < userData.length; i++){
            if(userData[i].id == req.params.id){
                userData.splice(i, 1, req.body)
            } 
        }
        res.status(200).send(userData)
    },
    createNewUsers: ( req, res ) => {
        req.body.id = userData.length + 1
        userData.splice(userData.length, 0, req.body)

        res.status(200).send(userData)
        
    },
    deleteUsers: ( req, res ) => {
        userData.splice(req.params.id - 1, 1)
        res.status(200).send(userData)
    }

}