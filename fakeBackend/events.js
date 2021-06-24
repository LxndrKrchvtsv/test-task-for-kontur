const { createGuid } = require("../utils/guid");

const eventNames = [
  "Data from the trading platform received",
  "Outbound success in consolidated warehouse",
  "Inbound in sorting center",
  "Shipment arrived at facility and measured",
  "Outbound in sorting center",
  "Depart from facility to service provider",
  "Receiving",
  "Arrive to transit country",
  "Post office collection",
  "Delivered to the carrier for transportation",
  "Habd over to airline",
  "Arrive at desctination country",
  "Arrive at sorting center",
  "Released by customs",
  "Left sorting center",
  "Sorting",
  "Delivered",
];

const events = Array.from({ length: eventNames.length }, (_, i) => ({ id: createGuid(), name: eventNames[i] }));

module.exports = { events };
