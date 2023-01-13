const { User } = require('../../db/models');
const jwt = require('jsonwebtoken');
const argon = require('argon2');

const {
    JWT_SECRET_KEY
} = process.env;

module.exports = {
    login: async(req, res, next) => {
        const user = await User.findOne({ where: { email: req.body.email } })
        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'user not found!',
                data: null
            });
        }
        
        const isPassCorrect = await argon.verify(user.password, req.body.password);
        if (!isPassCorrect) {
            return res.status(404).json({
                status: false,
                message: 'password is not correct'
            });
        }

        req.session.userId = user.uuid;
        const uuid = user.uuid;
        const name = user.name;
        const email = user.email;
        const role = user.role;

        res.status(200).json({
            message: "Login berhasil",
            data: [ uuid, name, email ,role ]
        });
    },
    loginAdmin: async(req, res, next) => {
        try {
            const user = await User.findOne({ where: { email: req.body.email } })
            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: 'user not found!',
                    data: null
                });
            }
            
            const isPassCorrect = await argon.verify(user.password, req.body.password);
            if (!isPassCorrect) {
                return res.status(404).json({
                    status: false,
                    message: 'password is not correct'
                });
            }

            req.session.userId = user.uuid;
            const uuid = user.uuid;
            const name = user.name;
            const email = user.email;
            const role = user.role;

            if (role !== "admin") {
                return res.status(401).json({
                    status: true,
                    message: 'Not Authorized!'
                })
            }

            res.status(200).json({
                message: "Login berhasil",
                data: [ uuid, name, email ,role ]
            });
        } catch (error) {
            next(err);
        }
    },
    whoami: async(req, res, next) => {
        if (!req.session.userId) {
            return res.status(401).json({
                message: "Mohon login akun anda"
            })
        }
        const user = await User.findOne({
            attributes: ['id', 'uuid', 'name', 'email', 'role'], 
            where: { 
                uuid: req.session.userId
            }
        });
        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan!"
            })
        }
        res.status(200).json(user);

    },
    logout: async(req, res, next) => {
        req.session.destroy((err) => {
            if (err) {
                return res.status(400).json({
                    message: "Tidak dapat logout!"
                });
            }
            res.status(200).json({
                message: "Anda telah logout!"
            })
        });
    }
}