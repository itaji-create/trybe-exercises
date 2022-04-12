const express = require('express');
const { Plan } = require('../models');
const router = express.Router();
const plansService = require('../services/plansServices');
router
    .get('/', async (req, res) => {
        try {
            const plans = await Plan.findAll();
            return res.status(200).json(plans)
        } catch (error) {
            return res.status(500).json({ message: 'ooops' })
        }

    })
    .get('/:id', async (req, res) => {
        try {
            const plan = await Plan.findByPk(req.params.id);
            if (!plan) return res.status(404).json({ message: 'Usuário não encontrado' });

            return res.status(200).json(plan)
        } catch (error) {
            return res.status(500).json({ message: 'ooops' })
        }
    })
    .post('/', async (req, res) => {
        const { type, price } = req.body;
        if (!req.body) return res.status(400).json({ message: 'erro usuario' })
        const plan = await plansService.create({type, price})
        return res.status(200).json(plan);
    });

module.exports = router;