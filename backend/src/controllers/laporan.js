const { Laporan } = require('../../db/models');
const { User } = require('../../db/models');
const { Op } = require('sequelize');

module.exports = {
    getLaporan: async(req, res, next) => {
        try {
            let laporan;
            if(req.role === "admin"){
                laporan = await Laporan.findAll({
                    attributes: {exclude: ["createdAt","updatedAt"]},
                    include:[{
                        model: User,
                        attributes: ['uuid','name', 'nik', 'address', 'gender']
                    }]
                })
            }else{
                laporan = await Laporan.findAll({ 
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
            return res.status(200).json(laporan)
        } catch(err) {
            next(err);
        }
    },
    getLaporanById: async(req, res, next) => {
        try {
            const laporan = await Laporan.findOne({ where: {id: req.params.id }})
            if (!laporan){
                return res.status(404).json({
                    message: "Data tidak ditemukan"
                })
            }
            let response;
            if(req.role === "admin"){
                response = await Laporan.findOne({
                    where :{
                        userId: laporan.id
                    },
                    attributes: {exclude: ["createdAt","updatedAt"]},
                    include:[{
                        model: User,
                        attributes: ['uuid','name', 'nik', 'address', 'gender']
                    }]
                })
            }else{
                response = await Laporan.findOne({ 
                    where :{
                        [Op.and]:[{ id: laporan.id}, {userId: req.userId}]
                    },
                    attributes: {exclude: ["createdAt","updatedAt"]},
                    include:[{
                        model: User,
                        attributes: ['uuid','name', 'nik', 'address', 'gender']
                    }]
                })
            }
            return res.status(200).json(response)
        } catch(err) {
            next(err);
        }
    },
    create: async(req, res, next) => {
        const { type, content, description } = req.body;
        try {
            await Laporan.create({
                type: type,
                content: content,
                description: description,
                userId: req.userId
            })
            return res.status(201).json({
                message: "Laporan berhasil dibuat"
            })
        } catch(err) {
            next(err);
        }
    },
    update: async(req, res, next) => {
        try {
            const laporan = await Laporan.findOne({ where: {id: req.params.id }})
            if (!laporan){
                return res.status(404).json({
                    message: "Data tidak ditemukan"
                })
            }
            const { content, description } = req.body;
    
            if(req.role === "admin"){
                await Laporan.update({ content,description},{
                    where: {
                        id: laporan.id
                    }
                });
            }else{
                if (req.userId !== laporan.userId){
                    return res.status(403).json({
                        message: "Not Authorized!"
                    });
                }
                await Laporan.update({ content,description},{
                    where: {
                        [Op.and]:[{ id: laporan.id}, {userId: req.userId}]
                    }
                });
            }
            return res.status(200).json({
                message: "Laporan berhasil diupdate!"
            })
            return res.status(200).json(response)
        } catch(err) {
            next(err);
        }
    },
    delete: async(req, res, next) => {
        try {
            const laporan = await Laporan.findOne({ where: {id: req.params.id }})
            if (!laporan){
                return res.status(404).json({
                    message: "Data tidak ditemukan"
                })
            }
            const { content, description } = req.body;
    
            if(req.role === "admin"){
                await Laporan.destroy({
                    where: {
                        id: laporan.id
                    }
                });
            }else{
                if (req.userId !== laporan.userId){
                    return res.status(403).json({
                        message: "Not Authorized!"
                    });
                }
                await Laporan.destroy({
                    where: {
                        [Op.and]:[{ id: laporan.id}, {userId: req.userId}]
                    }
                });
            }
            return res.status(200).json({
                message: "Laporan berhasil dihapus!"
            })
            return res.status(200).json(response)
        } catch(err) {
            next(err);
        }
    }
}