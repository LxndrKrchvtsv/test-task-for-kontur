const {axios} = require("./fakeBackend/mock");

const getEvents = async (formatDates = false) => {
    const response = await axios.get('/tracks').then(response => response.data.tracks);
    const result = {"events": []}

    for (track in response) {
        const lastEvent = response[track].length - 1
        const date = response[track][lastEvent].date;
        const event = await requestEvent(response[track].pop().id).then(response => response["events"][0]["name"]);
        let test = new Date(date);
        test = `${test.getDate()}-${test.getMonth() + 1}-${test.getFullYear()} ${test.getHours()}:${test.getMinutes()}:${test.getSeconds()}`
        result.events.push({
            "trackId": track,
            "event": event,
            "date": formatDates ? test : date
        });
    }
    return result;
};

const requestEvent = async (id) => {
    try {
        return await axios.get('/events', {params: {id: id}}).then(response => response.data);
    } catch (e) {
        console.log(e.response.data);
    }
}

getEvents();

module.exports = {getEvents};
