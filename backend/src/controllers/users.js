const { User } = require('../../db/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const argon = require('argon2');

const {
    JWT_SECRET_KEY
} = process.env;

module.exports = {
    getUser: async(req, res, next) => {
        try {
            const user = await User.findAll({
                attributes: ['id', 'uuid', 'name', 'email', 'role']
            });

            res.status(200).json({
                data: user
            })
        } catch(err) {
            next(err);
        }
    },
    getUserById: async(req, res, next) => {
        try {
            const user = await User.findOne({ 
                where: { id: req.params.id },
                attributes: ['id', 'name', 'email', 'role']
            });

            res.status(200).json({
                data: user
            })
        } catch(err) {
            next(err);
        }
    },
    register: async(req, res, next) => {
        try {
            const { name, email, password, nik, address, gender, role } = req.body;

            const existUser = await User.findOne({where: { email: email }});
            if(existUser){
                return res.status(401).json({
                    status: false,
                    message: "Email already used!"
                });
            }

            const encryptPassword = await argon.hash(password, 10);
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!email.match(regex)) {
                return res.status(400).json({
                    message: 'Email is not valid'
                })
            };
            let strongRegex = /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/
            if (!password.match(strongRegex)) {
                return res.status(400).json({
                    message: 'password must have Capital, number and special character(minimum 8 character) '
                })
            };

            await User.create({
                name: name,
                email: email,
                password: encryptPassword,
                nik: nik,
                address: address,
                gender: gender,
                role: role
            });
            return res.status(201).json({
                status: true,
                message: "Success create account!",
                role: role
            });

        } catch(err){
            next(err);
        }
    },
    update: async(req, res, next) => {
        try {
            const user = await User.findOne({ 
                where: { id: req.params.id }
            });
            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: "User not found!"
                })
            }
            const { name, email, nik, address } = req.body;
            try {
                await User.update({
                    name: name,
                    email: email,
                    nik: nik,
                    address: address,
                },
                {
                    where: {id: user.id}
                })

                return res.status(201).json({
                    message: "Update success!"
                })
            } catch(err) {
                next(err);
            }
        } catch(err) {
            next(err);
        }
    },
    delete: async(req, res, next) => {
        try {
            const user = await User.findOne({ 
                where: { id: req.params.id }
            });
            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: "User not found!"
                })
            }

            try {
                await User.destroy(
                {
                    where: {id: user.id}
                });

                return res.status(201).json({
                    message: "Delete success!"
                })
            } catch(err) {
                next(err);
            }
        } catch(err) {
            next(err);
        }
    }
}