const { Informasi, Upload } = require("../../db/models");
const path = require('path');

module.exports = {
    getInformasi: async(req, res, next) => {
        try {
            const response = await Informasi.findAll();
            res.json(response);
        } catch (error) {
            console.log(error.message);
        }
    } ,
    create: async(req, res, next) => {
        try {
            if (req.files == null) {
                return res.status(400).json({
                    status: false,
                    message: "No File"
                })
            }
            const { content } = req.body;
            const name = req.body.title;
            const file = req.files.file;
            const fileSize = file.data.length;
            const ext = path.extname(file.name);
            const fileName = file.md5 + ext;
            const url = `${req.protocol}://${req.get("host")}/images/informasi/${fileName}`;
            const allowedType = ['.png', '.jpg', '.jpeg'];

            if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
            if(fileSize > 10000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
         
            file.mv(`./public/images/informasi/${fileName}`, async(err)=>{
                if(err) return res.status(500).json({msg: err.message});
                try {
                    await Informasi.create({
                        content: content,
                        file_name: name, 
                        image: fileName, 
                        file_url: url
                    });
                    res.status(201).json({msg: "Informasi Created Successfuly"});
                } catch (error) {
                    console.log(error.message);
                }
            })
        } catch (error) {
            next(error);
        }
    },
    edit: async(req, res, next) => {
        try {
            const informasi = await Informasi.findOne({
                where:{
                    id : req.params.id
                }
            });
            if(!informasi) return res.status(404).json({msg: "No Data Found"});
            let fileName = "";
            if(req.files === null){
                fileName = informasi.image;
            }else{
                //const { content } = req.body; 
                const file = req.files.file;
                const fileSize = file.data.length;
                const ext = path.extname(file.name);
                fileName = file.md5 + ext;
                const allowedType = ['.png','.jpg','.jpeg'];    
                
                if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
                if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
                
                const filepath = `./public/images/informasi/${informasi.image}`;
                fs.unlinkSync(filepath);
                
                file.mv(`./public/images/informasi/${fileName}`, (err)=>{
                    if(err) return res.status(500).json({msg: err.message});
                    });
                }
                
                const name = req.body.title;
                const url = `${req.protocol}://${req.get("host")}/images/informasi/${fileName}`;
                
                try {
                    await Informasi.update({
                        //content: content,
                        file_name: name, 
                        image: fileName, 
                        file_url: url
                },{
                    where:{
                        id: req.params.id
                    }
                });
                res.status(200).json({msg: "informasi Updated Successfuly"});
                } catch (error) {
                console.log(error.message);
                }
        } catch (error) {
            
        }
    }
}