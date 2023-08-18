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
  } = req.body;
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

  // eslint-disable-next-line no-console
  console.log('Store data from server', tickets);
  res.json('ok');
});

module.exports = router;
