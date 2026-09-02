import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  dataPercentage100TriggerAttributeSchema,
  type DataPercentage100TriggerAttribute,
} from "../data-percentage100-trigger-attribute.js";
import {
  dataPercentage50TriggerAttributeSchema,
  type DataPercentage50TriggerAttribute,
} from "../data-percentage50-trigger-attribute.js";
import {
  dataPercentage75TriggerAttributeSchema,
  type DataPercentage75TriggerAttribute,
} from "../data-percentage75-trigger-attribute.js";
import {
  dataPercentage90TriggerAttributeSchema,
  type DataPercentage90TriggerAttribute,
} from "../data-percentage90-trigger-attribute.js";
import {
  notificationGroupNameTriggerAttributeSchema,
  type NotificationGroupNameTriggerAttribute,
} from "../notification-group-name-trigger-attribute.js";
import {
  servicePlanTriggerAttributeSchema,
  type ServicePlanTriggerAttribute,
} from "../service-plan-trigger-attribute.js";

export type TriggerAttributes =
  | NotificationGroupNameTriggerAttribute
  | ServicePlanTriggerAttribute
  | DataPercentage50TriggerAttribute
  | DataPercentage75TriggerAttribute
  | DataPercentage90TriggerAttribute
  | DataPercentage100TriggerAttribute;

export const triggerAttributesSchema: Schema<TriggerAttributes> = s.of<TriggerAttributes>(
  s.union([
    s.lazy(() => notificationGroupNameTriggerAttributeSchema),
    s.lazy(() => servicePlanTriggerAttributeSchema),
    s.lazy(() => dataPercentage50TriggerAttributeSchema),
    s.lazy(() => dataPercentage75TriggerAttributeSchema),
    s.lazy(() => dataPercentage90TriggerAttributeSchema),
    s.lazy(() => dataPercentage100TriggerAttributeSchema),
  ]),
);
