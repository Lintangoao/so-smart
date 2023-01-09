const { Permohonan, User } = require('../../db/models');

module.exports = {
    getAll: async(req, res, next) => {
        try {
            let response;
            if(req.role === "admin"){
                response = await Permohonan.findAll({
                    attributes: {exclude: ["createdAt","updatedAt"]},
                    include:[{
                        model: User,
                        attributes: ['uuid','name', 'nik', 'address', 'gender']
                    }]
                })
            }else{
                response = await Permohonan.findAll({ 
                    where :{
                        userId: req.userId
                    },
                    attributes: {exclude: ["createdAt","updatedAt"]},
                    include:[{
                        model: User,
                        attributes: ['uuid','name', 'nik', 'address', 'gender']
                    }]
                })
            }
            return res.status(200).json(response);
        } catch(err) {
            next(err);
        }
    },
    getById: async(req, res, next) => {
        try {
            const permohonan = await Permohonan.findOne({ where: {id: req.params.id }})
            if (!permohonan){
                return res.status(404).json({
                    message: "Data tidak ditemukan"
                })
            }
            let response;
            if(req.role === "admin"){
                response = await Permohonan.findOne({
                    where :{
                        userId: permohonan.id
                    },
                    attributes: {exclude: ["createdAt","updatedAt"]},
                    include:[{
                        model: User,
                        attributes: ['uuid','name', 'nik', 'address', 'gender']
                    }]
                })
            }else{
                response = await Permohonan.findOne({ 
                    where :{
                        [Op.and]:[{ id: permohonan.id}, {userId: req.userId}]
                    },
                    attributes: {exclude: ["createdAt","updatedAt"]},
                    include:[{
                        model: User,
                        attributes: ['uuid','name', 'nik', 'address', 'gender']
                    }]
                })
            }
            return res.status(200).json(response);
        } catch(err) {
            next(err);
        }
    },
    create: async(req, res, next) => {
        try {
            const { type, necassity } = req.body;

            await Permohonan.create({
                type: type,
                necassity: necassity,
                userId: req.userId
            });
            return res.status(201).json({
                message: "Permohonan berhasil dibuat!"
            })
        } catch (err) {
            next(err);
        }
    },
    delete: async(req, res, next) => {
        try {
            const permohonan = await Permohonan.findOne({ where: {id: req.params.id }})
            if (!permohonan){
                return res.status(404).json({
                    message: "Data tidak ditemukan"
                })
            }
    
            if(req.role === "admin"){
                await Permohonan.destroy({
                    where: {
                        id: permohonan.id
                    }
                });
            }else{
                if (req.userId !== permohonan.userId){
                    return res.status(403).json({
                        message: "Not Authorized!"
                    });
                }
                await Permohonan.destroy({
                    where: {
                        [Op.and]:[{ id: permohonan.id}, {userId: req.userId}]
                    }
                });
            }
            return res.status(200).json({
                message: "Permohonan berhasil dihapus!"
            })
        } catch(err) {
            next(err);
        }
    }
}