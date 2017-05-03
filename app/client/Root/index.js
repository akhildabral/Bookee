console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV == 'development'){
    console.log("In Production....")
    module.exports = require('./Root.prod')
}else{
    console.log("In Developemntx.......")
    module.exports = require('./Root.dev')
}