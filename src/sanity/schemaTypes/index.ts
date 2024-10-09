import type { SchemaTypeDefinition } from "sanity";

import { faq } from "./faq";
import { sightseeingHighlights } from "./sightseeingHighlights";
import { topTourSummary } from "./topTourSummary";
import { travelHighlights } from "./travelHighlights";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [topTourSummary, travelHighlights, sightseeingHighlights, faq],
};
