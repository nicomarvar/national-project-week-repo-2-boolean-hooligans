import express from "express";

const Router = express.Router();
// import models functions
import {
  getAllWeeks,
  getWeekById,
  getDayById,
  getResourceById,
  createResource,
} from "../models/weeks.js";

//GET All the weeks/home page
Router.get("/", async (req, res) => {
  let weeks = await getAllWeeks();
  res.json({ success: true, message: `found all the weeks`, payload: weeks });
});

// GET A Week by ID
Router.get("/weeks/:id", async function (req, res) {
  // get all the week by id
  const week = await getWeekById(req.params.id);
  //  respond with.. everytime
  res.json({ success: true, message: `found the week`, payload: week });
});
//GET Day by id and Week by ID
Router.get("/days/:id", async function (req, res) {
  // get the day by id
  const { id } = req.params;
  const day = await getDayById(id);
  res.json({ success: true, message: `found the day`, payload: day });
});
//  Get new resource
Router.get("/days/:id", async function (req, res) {
  // get the day by id
  const { id } = req.params;
  const resource = await getResourceById(id);

  //  respond with.. everytime
  res.json({ success: true, message: `found the day`, payload: resource });
});

// PUT create new resource

Router.post("days/:id", async function (req, res) {
  const resource = await createResource(req.body);
  res.json({ success: true, payload: resource });
});

export default Router;
