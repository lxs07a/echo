const express = require('express')
const router = express.Router()
const Audio = require('../database/models/audio')
var multer  = require('multer')
var upload = multer({ dest: __dirname + '/../public/uploads/' });
var type = upload.single('upl');

router.post('/itempage', type, function (req, res) {
    
  var currentDateTime = new Date()
  const newAudio = new Audio({
      author: req.body.author,
      name: req.body.audioname,
      timedate: currentDateTime,
      audiopath: req.file.filename
  })
  console.log(newAudio)
  newAudio.save((err, savedAudio) => {
      if (err) return res.json(err)
      console.log(savedAudio)
      res.json(savedAudio)
  })
})

router.post('/recordings', (req, res) => {
    const username = req.body.username
    const name = req.body.audioname
    // ADD VALIDATION
    Audio.find({ }, (err, data) => {
        debugger
        if (err) console.log('audio.js post error: ', err)
        console.log(data)
        res.json(data)
    })
    
    // var currentDateTime = new Date()
    // const newAudio = new Audio({
    //     author: req.body.author,
    //     name: req.body.audioname,
    //     timedate: currentDateTime,
    //     audiopath: req.file.filename
    // })
    // console.log(newAudio)
    // newAudio.save((err, savedAudio) => {
    //     if (err) return res.json(err)
    //     console.log(savedAudio)
    //     res.json(savedAudio)
    // })
  })

module.exports = router