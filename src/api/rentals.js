/* eslint-disable linebreak-style */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const express = require('express');
const { PrismaClient } = require('@prisma/client');

// eslint-disable-next-line no-unused-vars
const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const {
    Companie,
    CompaniePhone,
    price,
    destination,
    startTime,
    endTime,
    sellingId,
  } = req.body;

  await prisma.Rental.create({
    data: {
      Companie,
      CompaniePhone,
      price,
      destination,
      startTime,
      endTime,
      sellingId,
    },
  });
  const result = await prisma.Rental.findMany({
    where: { sellingId },
  });
  res.json(result);
});

router.post('/update', async (req, res) => {
  const {
    id,
    endTime,
    isActivated,
  } = req.body;

  const result = await prisma.Rental.update({
    where: { id },
    data: {
      isActivated,
      endTime,
    },
  });

  res.json(result);
});
router.post('/sync', async (req, res) => {
  const {
    sellingId,
  } = req.body;

  const result = await prisma.Rental.findMany({
    where: { sellingId },
  });

  res.json(result);
});

module.exports = router;
