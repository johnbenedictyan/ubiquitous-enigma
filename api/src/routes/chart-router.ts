import personService from "@services/person-service";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

import { GENDERS } from "../enum/gender";
import { IChartData } from "../interface/IChartData";

// **** Variables **** //
// Misc
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
  bar: "/bar",
  pie: "/pie",
  chart: "/chart",
} as const;

// **** Routes **** //

/**
 * Get all chart data
 */
router.get(p.chart, async (_: Request, res: Response) => {
  return personService
    .getAll()
    .then((persons) => res.status(OK).json({ persons }));
});

/**
 * Get all data points for the bar chart
 */
router.get(p.bar, async (_: Request, res: Response) => {
  const persons = await personService.getAll();
  let data: IChartData[] = [];
  data.push({
    name: "Young Adult",
    value: persons.filter((x) => x.age > 0 && x.age <= 35).length,
  });
  data.push({
    name: "Adult",
    value: persons.filter((x) => x.age >= 36 && x.age <= 50).length,
  });
  data.push({
    name: "Seniors",
    value: persons.filter((x) => x.age >= 51).length,
  });

  return res.status(OK).json({ data });
});

/**
 *  Get all data points for the pie chart
 */
router.get(p.pie, async (_: Request, res: Response) => {
  const persons = await personService.getAll();
  let data: IChartData[] = [];
  data.push({
    name: "Male",
    value: persons.filter((x) => x.gender === GENDERS.M).length,
  });
  data.push({
    name: "Female",
    value: persons.filter((x) => x.gender === GENDERS.F).length,
  });

  return res.status(OK).json({ data });
});
