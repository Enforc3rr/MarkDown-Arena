const joi = require("joi");

exports.userRegistrationValidation = data =>{
    const schema = joi.object({
        username : joi.string().min(3).required(),
        password : joi.string().min(6).regex(RegExp("^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{6,}")).required(),
        email     : joi.string().email().required()
    });
    return schema.validate(data);
}