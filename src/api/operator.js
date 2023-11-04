/* eslint-disable linebreak-style */
const express = require('express');
const { PrismaClient } = require('@prisma/client');

// eslint-disable-next-line no-unused-vars
const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const { phone } = req.body;
  const result = await prisma.Operator.findFirst({
    where: {
      phone,
      isActiveted: true,
    },
    include: {
      reseau: true,
      Companie: true,
      Device: true,
      Vehicules: true,
      Selling: true,
    },
  });
  // eslint-disable-next-line no-console
  console.log('auth', result);
  res.json(result);
});
router.post('/edit', async (req, res) => {
  const {
    id, phone, password, name,
  } = req.body;
  const result = await prisma.Operator.update({
    where: {
      id,
    },
    data: {
      phone,
      password,
      name,
    },
    include: {
      reseau: true,
      Companie: true,
      Device: true,
      Vehicules: true,
    },
  });
  // eslint-disable-next-line no-console
  console.log('edit', result);
  res.json(result);
});
router.post('/sellings', async (req, res) => {
  const { id } = req.body;
  const result = await prisma.Operator.findFirst({
    where: {
      id,
    },
    include: {
      Selling: {
        include: {
          Controls: true,
          Costs: true,
          Rental: true,
          driver: true,
          seller: true,
          device: true,
          vehicule: true,
          Tickets: true,
          tracking: true,
          itinerary: true,
          trajet: true,
        },
      },
    },
  });
  // eslint-disable-next-line no-console
  console.log('sellings', result);
  res.json(result);
});
router.post('/selling', async (req, res) => {
  const { id } = req.body;
  const result = await prisma.Selling.findFirst({
    where: {
      id,
    },
    include: {
      Controls: true,
      Costs: true,
      Rental: true,
      driver: true,
      seller: true,
      device: true,
      vehicule: true,
      Tickets: true,
      tracking: true,
      itinerary: true,
      trajet: true,
    },
  });
  // eslint-disable-next-line no-console
  console.log('selling', result);
  res.json(result);
});
module.exports = router;
