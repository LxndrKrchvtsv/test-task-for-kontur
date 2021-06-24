const { parse } = require("url");
const MockAdapter = require("axios-mock-adapter");
const axios = require("axios");
const { events } = require("./events");
const { trackEvents } = require("./tracks");

const instance = axios.create();
const mock = new MockAdapter(instance);

const extractData = ({ data, params, url }) => {
  const { query } = parse(url, true);
  const parsedData = data && JSON.parse(data);

  return { ...query, ...params, ...parsedData };
};

mock.onGet(/events.*/).reply((config) => {
  let parsed;

  try {
    parsed = extractData(config);
  } catch (e) {
    return [400, { message: "Неверный формат данных" }];
  }

  if (parsed.ids && parsed.ids.includes) {
    const foundEvents = events.filter(({ id }) => parsed.ids.includes(id));
    return [200, { events: foundEvents }];
  }

  if (parsed.id) {
    const foundEvent = events.filter(({ id }) => id === parsed.id);
    return [200, { events: foundEvent }];
  }

  return [400, { message: "Идентификатор события не указан" }];
});

mock.onGet(/tracks.*/).reply((config) => {
  let parsed;

  try {
    parsed = extractData(config);
  } catch (e) {
    return [400, { message: "Неверный формат данных" }];
  }

  return [200, { tracks: trackEvents }];
});

module.exports = { axios: instance };
