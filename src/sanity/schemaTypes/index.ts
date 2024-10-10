import type { SchemaTypeDefinition } from "sanity";

import { additionalInfo } from "./additionalInfo";
import { experienceType } from "./experienceType";
import { faq } from "./faq";
import { itinerary } from "./itinerary";
import { sightseeingHighlights } from "./sightseeingHighlights";
import { topTourSummary } from "./topTourSummary";
import { travelHighlights } from "./travelHighlights";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [topTourSummary, travelHighlights, sightseeingHighlights, faq, experienceType, itinerary, additionalInfo],
};
