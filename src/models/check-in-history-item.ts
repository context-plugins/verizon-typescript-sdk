import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckInHistoryItem = {
  deviceId: string;
  clientType: string;
  result: string;
  failureType: string;
  timeCompleted: Date;
};

export const checkInHistoryItemSchema: Schema<CheckInHistoryItem> = s.object<CheckInHistoryItem>({
  deviceId: s.string(),
  clientType: s.string(),
  result: s.string(),
  failureType: s.string(),
  timeCompleted: s.dateTime(),
});
