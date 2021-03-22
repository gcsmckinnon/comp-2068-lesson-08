const Genre = require('../models/Genre');

exports.index = async (request, response, next) => {
  try {
    const genres = await Genre.find();
    response.status(200)
    .json(genres);
  } catch (error) {
    next(error);
  }
};

exports.create = async (request, response, next) => {
  try {
    const { name } = request.body;
    const genre = await Genre.create({
      name
    });

    response.status(200)
    .json({
      message: "Genre was created successfully",
      status: "success",
      genre
    });
  } catch (error) {
    next(error);
  }
};