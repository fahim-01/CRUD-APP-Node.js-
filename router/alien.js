const express = require('express');
const router = express.Router();
const Alien = require('../models/alien')
router.get('/', async(req, res) => {
  try{
    const aliens = await Alien.find()
    res.json(aliens)
  }catch(err){
    res.send('Error' + err)
  }
});

router.get('/:id', async(req,res) => {
  try{
    const alienid = await Alien.findById(req.params.id)
    if(!alienid)
    {
      return res.status(404).send('Alien Not Found')
    }
    res.json(alienid)
  }catch(err){
    res.send('Error' + err)
  }
})



router.post('/', async(req,res) => {
  console.log(req.body)
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
 router.patch('/:id', async(req, res) => {
  try{
       const alienp = await Alien.findById(req.params.id)
       alienp.sub = req.body.sub
       const a1 = await alienp.save()
     if(!alienp)
    {
      return res.status(404).send('Alien Not Found')
    }
       res.json(a1)
  }catch(err){
    res.send('Error')
  }
 })

 router.delete('/:id', async(req, res) => {
  try{
    const aliend = await Alien.findByIdAndDelete(req.params.id)
    if(!aliend)
    {
      return res.status(404).send('Alien Not Found')
    }
    res.json(`aliend ${aliend.name} Deleted Successfully`)

  }catch(err){
    res.send('Error')
  }
 })
 console.log("HELLO")
module.exports = router;
