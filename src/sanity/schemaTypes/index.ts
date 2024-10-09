import type { SchemaTypeDefinition } from "sanity";

import { sightseeingHighlights } from "./sightseeingHighlights";
import { topTourSummary } from "./topTourSummary";
import { travelHighlights } from "./travelHighlights";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [topTourSummary, travelHighlights, sightseeingHighlights],
};
