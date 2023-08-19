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
    controllerName,
    checkedTickets,
    ticketFraude,
    comment,
    startTime,
    endTime,
    controllerId,
    trajetId,
    itineraryId,
    sellingId,
    operatorId,
    CompanieId,
    vehiculeId,
    reseauId,
  } = req.body;

  await prisma.Control.create({
    data: {
      controllerName,
      checkedTickets,
      ticketFraude,
      comment,
      startTime,
      endTime,
      controllerId,
      trajetId,
      itineraryId,
      sellingId,
      operatorId,
      CompanieId,
      vehiculeId,
      reseauId,
    },
  });
  const result = await prisma.Control.findMany({
    where: {
      sellingId,
    },
  });
  res.json(result);
});

module.exports = router;
