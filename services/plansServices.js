const { Plan } = require('../models');

const create = async ({type, price}) => {
    const plan = await Plan.create({type, price})
    return plan;
}

module.exports = {
    create,
}