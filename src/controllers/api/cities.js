const getCitiesFromJournal = async (req, res) => {
  try {
    const { journal_id } = req.params;

    const [cities] = await req.db.query(
      "SELECT * FROM cities WHERE journal_id=?",
      [journal_id]
    );

    return res.status(200).json({
      success: true,
      data: cities,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to get cities for journal | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to get cities for journal",
    });
  }
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
