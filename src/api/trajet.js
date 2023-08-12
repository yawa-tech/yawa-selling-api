/* eslint-disable no-unused-vars */
const express = require('express');
const { PrismaClient } = require('@prisma/client');

// eslint-disable-next-line no-unused-vars
const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const {
    id,
    number,
    duration,
    departureTime,
    arrivalTime,
    sellingId,
    rising,
    destination,
    revenue,
  } = req.body;

  const result = await prisma.Trajet.create({
    data: {
      id,
      number,
      duration,
      departureTime,
      arrivalTime,
      sellingId,
      rising,
      destination,
      revenue,
    },
  });

  res.json(result);
});

module.exports = router;
