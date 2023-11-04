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
    rubricsId,
    price,
    sellingId,
  } = req.body;
  const fees = await prisma.Rubrics.findFirst({
    where: {
      id: rubricsId,
    },
  });
  await prisma.Costs.create({
    data: {
      rubricsId,
      name: fees.name,
      price,
      sellingId,
    },
  });
  const result = await prisma.Costs.findMany({
    where: {
      sellingId,
    },
  });
  res.json(result);
});
router.post('/delete', async (req, res) => {
  const {
    id,
    sellingId,
  } = req.body;

  await prisma.Costs.delete({
    where: {
      id,
    },
  });
  const result = await prisma.Costs.findMany({
    where: {
      sellingId,
    },
  });
  res.json(result);
});
module.exports = router;
