const { Router } = require("express");

const {
  getCitiesFromJournal,
  addCityToJournal,
  removeCityFromJornal,
} = require("../../controllers/api/cities");

const router = Router({ mergeParams: true });

router.get("/", getCitiesFromJournal);
router.post("/", addCityToJournal);
router.delete("/:cityId", removeCityFromJornal);

module.exports = router;
