const { Faculty } = require('../models');

module.exports = {
    index: async (req, res) => {
        const faculties = await Faculty.findAll();
        try {
            res.status(200).json({
                message: "get all data",
                data: faculties
            });   
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    },
    store: async (req, res) => {
        const data = req. body;
        try {
            const faculty = await Faculty.create({
                faculty_name: data.faculty_name
            });
            res.status(200).json({
                message: "create data success",
                data: faculty
            });
        } catch (error) {
            res.status(500).json({
                message: error
            });
        }
    },
    show: async (req, res) => {
        const id = req.params.id;
        try {
            const faculty = await Faculty.findByPk(id);
            res.status(200).json({
                message: "get single data",
                data: faculty
            });
        } catch (error) {
            res.status(500).json({
                message: error
            });
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try {
            const faculty = await Faculty.update({
                faculty_name: data.faculty_name
            }, {
                where: {
                    id: id
                }
            });
            res.status(200).json({
                message: "update data success",
                data: faculty
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    },
    delete: async (req, res) => {
        const id = req.params.id;
        try {
            const faculty = await Faculty.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).json({
                message: "delete data success",
                data: faculty
            });
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }
}