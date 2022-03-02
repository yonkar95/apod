const mongoose = require('mongoose');

const ApodSchema = new mongoose.Schema(
    {
      date: {
        type: String
      },
      explanation: {
        type: String
      },
      media_type: {
        type: String
      },
      service_version: {
        type: String
      },
      title: {
        type: String
      },
      url: {
        type: String
      }
    }
      );
 module.exports = mongoose.model('Apod', ApodSchema);
