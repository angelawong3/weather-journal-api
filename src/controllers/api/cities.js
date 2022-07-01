const getCitiesFromJournal = (req, res) => {
  res.send("getCitiesFromJournal");
};

const addCityToJournal = (req, res) => {
  res.send("addCityToJournal");
};

const removeCityFromJornal = (req, res) => {
  res.send("removeCityFromJornal");
};

module.exports = {
  getCitiesFromJournal,
  addCityToJournal,
  removeCityFromJornal,
};
