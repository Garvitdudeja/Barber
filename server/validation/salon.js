import joi from "joi";

export const validateCity = (city) => {
  const Schema = joi.object({
    city: joi.string().required(),
  });
  return Schema.validateAsync(city);
};

export const validateRestaurantSearchString = (searchString) => {
  const Schema = joi.object({
    searchString: joi.string().required(),
  });
  return Schema.validateAsync(searchString);
};
