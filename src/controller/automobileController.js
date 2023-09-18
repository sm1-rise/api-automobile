const { Sequelize } = require("sequelize");
const {Automobile, AutomobileDetails} = require("../models");

const automobileController = {
    getAll: async (req, res) =>{
        try {
            const getAllAutomobile = await Automobile.findAll();
            res.json(getAllAutomobile);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const auto = await Automobile.findByPk(id);
            if (!auto) {
                return res.status(404).json({ message: 'Automobile not found' });
            }
            res.json(auto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    getByIdDetails: async (req, res) => {
        try {
            const id = req.params.id;
            const auto = await Automobile.findByPk(id, {
                include: [{ model: AutomobileDetails }], 
              });
            if (!auto) {
                return res.status(404).json({ message: 'Automobile not found' });
            }
            res.json(auto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    createAutomobile: async (req, res) => {
        try {
			console.log("Teste")
            const { marca, modelo, ano, placa, motor, versao } = req.body;
			console.log(req.body);
            const newAuto = await Automobile.create({
				marca,
                modelo,
                ano,
                placa,
                motor,
                versao,
            });

			await res.status(201).json(newAuto);

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    deleteAutomobile: async (req, res) => {
        try {
            const { id } = req.params;
			console.log(id);
            await Automobile.destroy({ where: { id } });
            res.json("Carro Deletado");
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { marca, modelo, ano, placa, motor, versao } = req.body;

            const [updatedRows] = await Automobile.update(
                {
                    marca,
                    modelo,
                    ano,
                    placa,
                    motor,
                    versao,
                },
                {
                    where: {
                        id,
                    },
                }
            );

            if (updatedRows === 0) {
                return res.status(404).json({ message: 'Automobile not found' });
            }

            res.json("Carro atualizado");
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },
};

module.exports = automobileController;