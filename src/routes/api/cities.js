const { Router } = require("express");

const {
  getCitiesFromJournal,
  addCityToJournal,
  removeCityFromJornal,
} = require("../../controllers/api/cities");

const router = Router();

router.get("/", getCitiesFromJournal);
router.post("/", addCityToJournal);
router.delete("/:id", removeCityFromJornal);

module.exports = router;
