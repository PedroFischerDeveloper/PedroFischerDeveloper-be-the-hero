const generateUniqueId = require('../utils/genareteUniqueId');
const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response){
        try{
        
            const ongs = await connection('ongs').select('*');
            return response.json(ongs);

        } catch( err ) {
        
            return response.json(err);
    
        }
    },
    async create(request, response ) {
        const { name, email, whatssap, city, uf} = request.body;
    
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatssap,
            city,
            uf
        })
    
        return response.json({ id });
    }
}