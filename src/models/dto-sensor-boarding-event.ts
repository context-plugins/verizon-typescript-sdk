import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoFieldsSchema, type DtoFields } from "./dto-fields.js";

export type DtoSensorBoardingEvent = {
  /** Timestamp of the record */
  createdon?: Date;
  /** Error message */
  errmsg?: string;
  /** Fields to return needed by search */
  fields?: DtoFields;
  /** The current status of the device or transaction and will be `success` or `failed` */
  state?: string;
  /** The system-generated UUID of the transaction */
  transactionid?: string;
};

export const dtoSensorBoardingEventSchema: Schema<DtoSensorBoardingEvent> = s.object<DtoSensorBoardingEvent>({
  createdon: s.optional(s.dateTime()),
  errmsg: s.optional(s.string()),
  fields: s.optional(s.lazy(() => dtoFieldsSchema)),
  state: s.optional(s.string()),
  transactionid: s.optional(s.string()),
});
