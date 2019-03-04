const express = require('express');
const router = express.Router();

const { hotelsService } = require('../services');

 // /hotels
router.get('/', async (req, res) => {
  try {
    const data = await hotelsService.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

// /filter?name=XXX&stars=X
router.get('/filter', async (req, res) => {
  try {
    const { name, stars } = req.query;
    const data = await hotelsService.getAllFilteredBy(name, parseInt(stars));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

router.get('/mongo', async(req, res) => {
  try {
    const data = await hotelsService.getAllHotels();
    res.status(200).json({ message: 'OK', data });
  } catch (error) {
    res.status(500).json({ message: 'ERROR', error: error });
  }
})

router.post('/mongo', async(req, res) => {
  try {
    const data = await hotelsService.createHotel(req.body); 
    res.status(200).json({ message: 'OK', data });
  } catch (error) {
    res.status(500).json({ message: 'ERROR', error: error });
  }
});

router.put('/mongo', async(req, res) => {
  try {
    const data = await hotelsService.updateHotel(req.body);
    res.status(200).json({ message: 'OK', data });
  } catch (error) {
    res.status(500).json({ message: 'ERROR', error: error });
  }
});

router.delete('/mongo', async(req, res) => {
  try {
    const data = await hotelsService.deleteHotel(req.body.id);
    res.status(200).json({ message: 'OK', data });
  } catch (error) {
    res.status(500).json({ message: 'ERROR', error: error });
  }
})

module.exports = router;