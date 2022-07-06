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

const addCityToJournal = async (req, res) => {
  try {
    const payload = req.body;
    const { journal_id } = req.params;

    await req.db.query(
      "INSERT INTO cities (journal_id, city_name, temperature, humidity, windspeed, weather_description, country_code) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        journal_id,
        payload.city_name,
        payload.temperature,
        payload.humidity,
        payload.windspeed,
        payload.weather_description,
        payload.country_code,
      ]
    );

    return res.json({
      success: true,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to add city to journal | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to add city to journal",
    });
  }
};

const removeCityFromJornal = async (req, res) => {
  try {
    const { journal_id, cityId } = req.params;

    const [cities] = await req.db.query(
      "DELETE FROM cities WHERE journal_id=? AND id=?",
      [journal_id, cityId]
    );

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(
      `[ERROR: Failed to delete city from journal | ${error.message}]`
    );

    return res.status(500).json({
      success: false,
      error: "Failed to delete city from journal",
    });
  }
};

module.exports = {
  getCitiesFromJournal,
  addCityToJournal,
  removeCityFromJornal,
};
