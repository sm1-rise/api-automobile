const { Sequelize } = require("sequelize");
const {Automobile, AutomobileDetails} = require("../models/index");

const autoDetailsController = {
    getAll: async (req, res) =>{
        try {
            const getAllDetails = await AutomobileDetails.findAll();
            res.json(getAllDetails);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const auto = await AutomobileDetails.findByPk(id);
            if (!auto) {
                return res.status(404).json({ message: 'Details not found' });
            }
            res.json(auto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    createAutomobile: async (req, res) => {
        try {
            const { cor, quilometragem, combustivel, cambio, final_placa, automobile_id} = req.body;
			console.log(req.body);
            const newAuto = await AutomobileDetails.create({
				cor,
                quilometragem,
                combustivel,
                cambio,
                final_placa,
                automobile_id,
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
            await AutomobileDetails.destroy({ where: { id } });
            res.json("Detalhes Deletado");
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { cor, quilometragem, combustivel, cambio, final_placa,automobile_id} = req.body;

            const [updatedRows] = await AutomobileDetails.update(
                {
                    cor,
                    quilometragem,
                    combustivel,
                    cambio,
                    final_placa,
                    automobile_id
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

            res.json("Detalhes atualizado");
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },
};

module.exports = autoDetailsController;