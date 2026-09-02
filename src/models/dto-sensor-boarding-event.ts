import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoFieldsSchema, type DtoFields } from "./dto-fields.js";

export type DtoSensorBoardingEvent = {
  createdon?: Date;
  errmsg?: string;
  fields?: DtoFields;
  state?: string;
  transactionid?: string;
};

export const dtoSensorBoardingEventSchema: Schema<DtoSensorBoardingEvent> = s.object<DtoSensorBoardingEvent>({
  createdon: s.optional(s.dateTime()),
  errmsg: s.optional(s.string()),
  fields: s.optional(s.lazy(() => dtoFieldsSchema)),
  state: s.optional(s.string()),
  transactionid: s.optional(s.string()),
});
