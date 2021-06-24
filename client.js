const { axios } = require("./fakeBackend/mock");

const getEvents = async (formatDates = false) => {
   // await axios.get('/events').then(response => console.log(response))
   const result = await axios.get('/tracks').then(response => response.data.tracks);
   // console.log(result);

   for (track in result) {
      result[track].forEach(e => {
         console.log(e.id);
      });
      // result[track]
      // axios.get('/events' + track).then(response => console.log(response));
   }
};

getEvents();

module.exports = { getEvents };
