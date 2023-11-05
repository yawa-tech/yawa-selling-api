/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable indent */
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
    tickets,
    revenue,
    sellingId,
  } = req.body;
  this.revenue = Number(revenue)
  for (let index = 0; index < tickets.length; index++) {
    const item = tickets[index];
    await prisma.Ticket.upsert({
      where: {
        id: item.id,
      },
      update: {
        status: 'Invalide',
        isActivated: false,
        isOnline: true,
      },
      create: {
        id: item.id,
        code: item.code,
        price: item.price,
        name: item.name,
        validUntil: item.validUntil,
        startTime: item.startTime,
        endTime: item.endTime,
        status: item.status,
        rateId: item.rateId,
        tripId: item.tripId,
        sellingId: item.sellingId,
        isOnline: true,
      },
    });
  }
 const store = await prisma.selling.update({
    where: {
      id: sellingId,
    },
    data: {
      revenue: this.revenue,
    },
  });

  // eslint-disable-next-line no-console
  console.log('revenue from server', revenue);
  // eslint-disable-next-line no-console
  console.log('store data', store);
  console.log('Store data from server', tickets);
  res.json('ok');
});

module.exports = router;
