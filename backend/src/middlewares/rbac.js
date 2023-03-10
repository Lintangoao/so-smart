const { User } = require('../../db/models');

module.exports = {
    cekUser: async(req, res, next) => {
        if (!req.session.userId) {
            return res.status(401).json({
                message: "Mohon login akun anda"
            })
        }
        const user = await User.findOne({
            where: { 
                uuid: req.session.userId
            }
        });
        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan!"
            })
        }
        req.userId = user.id;
        req.role = user.role;
        next();
    },
    cekAdmin: async(req, res, next) => {
        if (!req.session.userId) {
            return res.status(401).json({
                message: "Mohon login akun anda"
            })
        }
        const user = await User.findOne({
            where: { 
                uuid: req.session.userId
            }
        });
        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan!"
            })
        }
        req.userId = user.id;
        req.role = user.role;
        
        if(user.role!== "admin"){
            return res.status(401).json({
                message: "Not Authorized!"
            });
        }
        next();
    }
}