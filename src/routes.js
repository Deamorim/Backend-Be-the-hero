const express = require('express');
const crypto = require('crypto');
const OngController = require('./controllers/OngController');

const routes = express.Router();
//routes.get('/ongs', async (Request, Response) => {
    //const ongs = await connection('ongs').select('*');
    //return Response.json(ongs);
//});

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;
    //const { name, email, whatsapp, city, uf } = Request.body;
        //Console.log(data);
    
        //const id = crypto.randomBytes(4).toString('HEX');
            //await connection('ongs').insert({
                //id,
                //name,
                //email,
               // whatsapp,
               // city,
                //uf,
            //})
    
        //return Response.json ({ id });
    
    //return Response.send('Hello World');
        //evento: 'Semana OmniStack 11.0',
        //aluno: 'Denis Amorim' 


