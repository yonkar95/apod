
const Apod = require('../models/Apod');
const axios = require('axios');


  exports.getOne = async (req, res,next) => {
    try {
        let apod = await Apod.findOne(req.query);
        if(!apod){
           axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${req.query.date}`,{
            }).then(function (response){
               Apod.create(response.data);
                res.render('index',{
                  data:response.data
                });
            },function (e){
              // next(e);
              res.render('error',{
                data:e.response.data
              });
            });
        }
        else{
          res.render('index',{
            data:apod
          });
        }
    } catch (e) {
        console.log(e);
        return res
        .status(400)
        .json({succes:false});
    }
  };
  


  
