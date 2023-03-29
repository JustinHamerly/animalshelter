const CommentModel = require ('../models/comments');

//a need a function to fetch comments
async function getComments(req, res, next) {

  try {
    const id = request.params.id;
    let foundComments = await CommentModel.find({animalID: id});
    response.status(201).send(foundComments);

  } catch (error) {
    console.log(error.message);
    next (error);
  }
}




// define what a comment looks like
// i need to export the comment data











//postComments