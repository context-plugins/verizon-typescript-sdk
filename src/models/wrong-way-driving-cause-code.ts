import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WrongWayDrivingCauseCode = {
  wrongWayDriving14: number;
};

export const wrongWayDrivingCauseCodeSchema: Schema<WrongWayDrivingCauseCode> =
  s.object<WrongWayDrivingCauseCode>({
    wrongWayDriving14: s.number(),
  });
