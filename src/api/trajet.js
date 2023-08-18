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
router.post('/add', async (req, res) => {
  const {
    oldData,
    newData,
  } = req.body;
  // eslint-disable-next-line no-console
  console.log('Olddata from api request', oldData);
  // eslint-disable-next-line no-console
  console.log('Newdata from api request', newData);

  await prisma.Trajet.upsert({
    where: {
      id: oldData.id,
    },
    update: {
      arrivalTime: oldData.arrivalTime,
      isActivated: oldData.isActivated,
      revenue: oldData.revenue,
    },
    create: {
      id: oldData.id,
      number: oldData.number,
      duration: oldData.duration,
      departureTime: oldData.departureTime,
      arrivalTime: oldData.arrivalTime,
      sellingId: oldData.sellingId,
      rising: oldData.rising,
      destination: oldData.destination,
      revenue: oldData.revenue,
    },
  });
  const save = await prisma.Trajet.create({
    data: {
      id: newData.id,
      number: newData.number,
      duration: newData.duration,
      departureTime: newData.departureTime,
      arrivalTime: newData.arrivalTime,
      sellingId: newData.sellingId,
      rising: newData.rising,
      destination: newData.destination,
      revenue: newData.revenue,
    },
  });
  let result;
  if (save) {
    result = await prisma.Trajet.findMany({
      where: {
        sellingId: newData.sellingId,
      },
      include: {
        Tickets: true,
        Controls: true,
      },
    });
  }

  res.json(result);
});
module.exports = router;
