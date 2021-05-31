// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import bartender from "./documents/bartender";
import category from "./documents/category";
import drink from "./documents/drink";
import siteSettings from "./documents/siteSettings";
import dinnerFood from './documents/dinnerFood'
import brunchFood from './documents/brunchFood'
import barFood from './documents/barFood'

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import bartenderReference from "./objects/bartenderReference";
import ingredient from './objects/ingredient'
import options from './objects/options'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "drinklist",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    drink,
    dinnerFood,
    brunchFood,
    barFood,
    ingredient,
    category,
    bartender,
    mainImage,
    bartenderReference,
    options,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
