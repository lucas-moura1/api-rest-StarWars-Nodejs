const yup = require('yup')

const planetSchema = yup.object().shape({
    name: yup
        .string()
        .required(),

    weather: yup
        .string()
        .required(),

    ground: yup
        .string()
        .required()
})

module.exports = planetSchema
