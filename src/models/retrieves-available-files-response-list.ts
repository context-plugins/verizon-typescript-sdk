import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  retrievesAvailableFilesResponseSchema,
  type RetrievesAvailableFilesResponse,
} from "./retrieves-available-files-response.js";

export type RetrievesAvailableFilesResponseList = {
  availableFilesResponse?: RetrievesAvailableFilesResponse[];
};

export const retrievesAvailableFilesResponseListSchema: Schema<RetrievesAvailableFilesResponseList> =
  s.object<RetrievesAvailableFilesResponseList>({
    availableFilesResponse: s.optional(s.array(s.lazy(() => retrievesAvailableFilesResponseSchema))),
    _keysMap: {
      availableFilesResponse: "AvailableFilesResponse",
    },
  });
