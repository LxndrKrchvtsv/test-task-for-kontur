const { events } = require("./events");

const trackEvents = {
  AS176810434CN: [
    {
      id: events[1].id,
      date: new Date(2020, 11, 13, 15, 14, 30).valueOf(),
    },
  ],
  ZF352609325HK: [
    {
      id: events[1].id,
      date: new Date(2020, 11, 13, 11, 18, 27).valueOf(),
    },
    {
      id: events[2].id,
      date: new Date(2020, 11, 14, 2, 39, 45).valueOf(),
    },
    {
      id: events[4].id,
      date: new Date(2020, 11, 16, 13, 19, 54).valueOf(),
    },
    { id: events[3].id, date: new Date(2020, 11, 15, 19, 13, 19).valueOf() },

  ],
};

module.exports = { trackEvents };
