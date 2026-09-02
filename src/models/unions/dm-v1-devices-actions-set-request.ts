import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  dtoDeviceActionSetRequestSchema,
  type DtoDeviceActionSetRequest,
} from "../dto-device-action-set-request.js";
import { dtoDeviceCommandSchema, type DtoDeviceCommand } from "../dto-device-command.js";

export type DmV1DevicesActionsSetRequest = DtoDeviceActionSetRequest | DtoDeviceCommand;

export const dmV1DevicesActionsSetRequestSchema: Schema<DmV1DevicesActionsSetRequest> =
  s.of<DmV1DevicesActionsSetRequest>(
    s.union([s.lazy(() => dtoDeviceActionSetRequestSchema), s.lazy(() => dtoDeviceCommandSchema)]),
  );
