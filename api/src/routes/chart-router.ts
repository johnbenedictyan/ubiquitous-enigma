import personService from '@services/person-service';
import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

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
  const persons = await personService.getAll();
  return res.status(OK).json({ persons });
});
