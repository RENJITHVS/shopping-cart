var db = require('../config/connection')
var collection = require('../config/collection')
const bcrypt = require('bcrypt')
const Promise = require('promise')
module.exports = {
    doSignup: (userData) => {
        return new Promise(async (resolve, reject) => {
            userData.Password = await bcrypt.hash(userData.Password, 10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data) => {
                resolve(data.ops[0])
            })
        })


    },
    doLogin: (userData) => {
        return new Promise(async (resolve, reject) => {
            let loginStatus = false;
            let response = {}
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({Username:userData.Username})

            if (user) {
                bcrypt.compare(userData.Password,user.Password).then((status)=>{
                    if(status) {
                        console.log("login success");
                        response.user=user;
                        response.status=true;
                        resolve(response)
                    }
                    else {
                        console.log('login failed')
                        resolve({status:false})
                    }
                })
            }
            else {
                console.log("login Failed");
                resolve({status:false})
            }

        })
    }
}
