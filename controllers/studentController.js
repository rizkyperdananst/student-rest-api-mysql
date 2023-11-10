const { Student } = require('../models');

module.exports = {
    index: async (req, res) => {
        const students = await Student.findAll();
        try {
            res.status(200).json({
                message: 'get all student data',
                data: students
            });
        } catch (error) {
            res.status(5000).json({
                message: error
            });
        }
    },
    store: async (req, res) => {
        const data = req.body;
        try {
            const student = await Student.create({
                nim: data.nim,
                name: data.name,
                faculty: data.faculty,
                study_program: data.study_program
            }); 
            res.status(200).json({
                message: "create student data success",
                data: student
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
            const student = await Student.findByPk(id);
            res.status(200).json({
                message: 'get single student data',
                data: student
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
            const student = await Student.update({
                nim: data.nim,
                name: data.name,
                faculty: data.faculty,
                study_program: data.study_program
            }, {
                where: {
                    id: id
                }
            }) ;
            res.status(200).json({
                message: "update student data success",
                data: student
            });
        } catch (error) {
            res.status(500).json({
                message: error
            });
        }
    },
    delete: async (req, res) => {
        const id = req.params.id;
        try {
            const student = await Student.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).json({
                message: `delete student with id ${id} data success`,
                data: student
            });
        } catch (error) {
            res.status(500).json({
                message: error
            });
        }
    }
}