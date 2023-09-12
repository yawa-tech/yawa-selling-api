const express = require('express');
const { PrismaClient } = require('@prisma/client');

// eslint-disable-next-line no-unused-vars
const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
  const Role = await prisma.Role.findMany();
  const User = await prisma.User.findMany();
  const Account = await prisma.Account.findMany();
  const Device = await prisma.Device.findMany();
  const Sim = await prisma.Sim.findMany();
  const Licence = await prisma.Licence.findMany();
  const Reseau = await prisma.Reseau.findMany();
  const ReseauConfig = await prisma.ReseauConfig.findMany();
  const Companie = await prisma.Companie.findMany();
  const Contract = await prisma.Contract.findMany();
  const Operator = await prisma.Operator.findMany();
  const Vehicule = await prisma.Vehicule.findMany();
  const DeviceAttribution = await prisma.DeviceAttribution.findMany();
  const Itinerary = await prisma.Itinerary.findMany();
  const Coordinate = await prisma.Coordinate.findMany();
  const Rate = await prisma.Rate.findMany();
  const Rubrics = await prisma.Rubrics.findMany();
  const Controller = await prisma.Controller.findMany();
  const LineManager = await prisma.LineManager.findMany();
  const Regulator = await prisma.Regulator.findMany();
  const Seller = await prisma.Seller.findMany();
  const Driver = await prisma.Driver.findMany();
  const Selling = await prisma.Selling.findMany();
  const Control = await prisma.Control.findMany();
  const Trajet = await prisma.Trajet.findMany();
  const Ticket = await prisma.Ticket.findMany();
  const Rental = await prisma.Rental.findMany();
  const Costs = await prisma.Costs.findMany();
  res.json();
});

module.exports = router;
