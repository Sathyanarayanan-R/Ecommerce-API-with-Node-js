const express = require('express');
const router = express.Router();

// Bring in Models & Utils
const Brand = require('../../models/brand');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');
const { ROLES } = require('../../constants');

router.post('/add', auth, role.check(ROLES.Admin), async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const isActive = req.body.isActive;

    if (!description || !name) {
      return res
        .status(400)
        .json({ error: 'You must enter description & name.' });
    }

    const brand = new Brand({
      name,
      description,
      isActive
    });

    const brandDoc = await brand.save();

    res.status(200).json({
      success: true,
      message: `Brand has been added successfully!`,
      brand: brandDoc
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

module.exports = router;
