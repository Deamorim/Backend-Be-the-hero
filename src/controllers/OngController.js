const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (Request, Response) {
        const ongs = await connection('ongs').select('*');
        
        return Response.json(ongs);
    },


    async create (request, response) {
        const { name, email, whatsapp, city, uf } = Request.body;
        //Console.log(data);
    
        const id = crypto.randomBytes(4).toString('HEX');
    
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return Response.json ({ id });
    }
};