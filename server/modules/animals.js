const axios = require('axios');

async function getAnimals(request, response, next) {
  try {
    const {type} = request.query;
    const url = `https://api.pexels.com/v1/search?query=${type}&orientation=square`;
    const key = process.env.PEXELS_API_KEY;
    const config = {
      url: url,
      method: 'get',
      headers: {
        'Authorization': key
      }
    }
    const pexelsResponse = await axios(config);
    const resultsToSend = pexelsResponse.data.photos.map(image => new AnimalResult(image))
    response.send(resultsToSend);
  } catch (error) {
    next(error);
  }
}

class AnimalResult {
  constructor(obj) {
    this.img = obj.src.small;
    this.title = obj.alt;
    this.text = `photographer: ${obj.photographer}`
  }
}

module.exports = {
  getAnimals
}
