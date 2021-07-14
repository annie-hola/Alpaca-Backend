import Joi from '@hapi/joi'

const Validations = data => {
    const schema = {
        email: Joi.string().ming(6).required().email(),
        password: Joi.string().ming(3).required()
    }
    return Joi.validate(data, schema)
}

export default Validations