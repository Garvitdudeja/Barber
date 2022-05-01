import joi from "joi";

export const validateRestaurantId = (_id) =>{
    const Schema = joi.object({
        _id: joi.string().required()
    })
    return Schema.validateAsync(_id)
}

export  const validateCategory = (category)=>{
    const Schema = joi.object({
        category: joi.string().required(),
    })
    return Schema.validateAsync(category)
}