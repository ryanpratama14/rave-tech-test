/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type TopTourSummary = {
  _id: string;
  _type: "topTourSummary";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  slug?: Slug;
  title?: string;
  description?: string;
  travel?: string;
  accommodation?: string;
  meals?: string;
  tripCode?: string;
  travelHighlights?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "travelHighlights";
  };
  sightseeingHighlights?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sightseeingHighlights";
  };
};

export type SightseeingHighlights = {
  _id: string;
  _type: "sightseeingHighlights";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  topTourSummaryTitle?: string;
  topTourSummary?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "topTourSummary";
  };
  firstHighlights?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  secondHighlights?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type TravelHighlights = {
  _id: string;
  _type: "travelHighlights";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  topTourSummaryTitle?: string;
  topTourSummary?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "topTourSummary";
  };
  firstHighlights?: Array<string>;
  secondHighlights?: Array<string>;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | TopTourSummary | SightseeingHighlights | TravelHighlights | Slug | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: TOP_TOUR_SUMMARIES_QUERY
// Query: *[_type == "topTourSummary"] {    ...,    slug,    travelHighlights->{      ...,    },    sightseeingHighlights->{      ...,    }  }
export type TOP_TOUR_SUMMARIES_QUERYResult = Array<{
  _id: string;
  _type: "topTourSummary";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  slug: Slug | null;
  title?: string;
  description?: string;
  travel?: string;
  accommodation?: string;
  meals?: string;
  tripCode?: string;
  travelHighlights: {
    _id: string;
    _type: "travelHighlights";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    topTourSummaryTitle?: string;
    topTourSummary?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "topTourSummary";
    };
    firstHighlights?: Array<string>;
    secondHighlights?: Array<string>;
  } | null;
  sightseeingHighlights: {
    _id: string;
    _type: "sightseeingHighlights";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    topTourSummaryTitle?: string;
    topTourSummary?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "topTourSummary";
    };
    firstHighlights?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
    secondHighlights?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
  } | null;
}>;
// Variable: TOP_TOUR_SUMMARY_QUERY
// Query: *[_type == "topTourSummary" && slug.current == $slug][0] {    ...,    travelHighlights->{      ...,    },    sightseeingHighlights->{      ...,    }  }
export type TOP_TOUR_SUMMARY_QUERYResult = {
  _id: string;
  _type: "topTourSummary";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  slug?: Slug;
  title?: string;
  description?: string;
  travel?: string;
  accommodation?: string;
  meals?: string;
  tripCode?: string;
  travelHighlights: {
    _id: string;
    _type: "travelHighlights";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    topTourSummaryTitle?: string;
    topTourSummary?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "topTourSummary";
    };
    firstHighlights?: Array<string>;
    secondHighlights?: Array<string>;
  } | null;
  sightseeingHighlights: {
    _id: string;
    _type: "sightseeingHighlights";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    topTourSummaryTitle?: string;
    topTourSummary?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "topTourSummary";
    };
    firstHighlights?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
    secondHighlights?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
  } | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"topTourSummary\"] {\n    ...,\n    slug,\n    travelHighlights->{\n      ...,\n    },\n    sightseeingHighlights->{\n      ...,\n    }\n  }": TOP_TOUR_SUMMARIES_QUERYResult;
    "*[_type == \"topTourSummary\" && slug.current == $slug][0] {\n    ...,\n    travelHighlights->{\n      ...,\n    },\n    sightseeingHighlights->{\n      ...,\n    }\n  }": TOP_TOUR_SUMMARY_QUERYResult;
  }
}
