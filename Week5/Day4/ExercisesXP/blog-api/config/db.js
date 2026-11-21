const db=require('knex')({
    client:'pg',
    connection:{
        host:'127.0.0.1',//localhost
        user:'postgres',
        password:'admin',
        port:5433,
        database:'postgres'
    }
});
module.exports=db