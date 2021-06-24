const { expect } = require("chai");
const { getEvents } = require("./client");

describe("getEvents", function () {
  it("загружает все треки", async () => {
    const { events } = await getEvents();

    const tracks = events.map((x) => x.trackId);
    expect(tracks).deep.equal(["AS176810434CN", "ZF352609325HK"]);
  });

  it("Загружает информацию о событиях", async () => {
    const { events } = await getEvents();
    const track = events.find((x) => x.trackId === "AS176810434CN");

    expect(track.event).is.equal("Outbound success in consolidated warehouse");
  });

  it("Оставляет последнее событие", async () => {
    const { events } = await getEvents();
    const names = events.map(({ event }) => event);

    expect(names).deep.equal(["Outbound success in consolidated warehouse", "Outbound in sorting center"]);
  });

  it("Возвращает дату", async () => {
    const { events } = await getEvents();
    const track = events.find((x) => x.trackId === "AS176810434CN");

    expect(track).to.have.property("date");
  });

  it("Форматирует дату если задан флаг", async () => {
    const { events } = await getEvents(true);
    const track = events.find((x) => x.trackId === "AS176810434CN");

    expect(track.date).to.equal("13-12-2020 15:14:30");
  });
});
