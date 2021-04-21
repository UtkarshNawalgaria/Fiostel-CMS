import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import room from './documents/room'
import category from './documents/category'
import item from "./documents/item"
import page from "./documents/page";
import siteSettings from "./documents/siteSettings";
import amenities from './documents/amenities'


import newImage from './objects/newImage'
import seo from './objects/seo'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "mySchema",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Object Types
    newImage,
    seo,

    // Document Types
    room,
    item,
    category,
    page,
    siteSettings,
    amenities
  ]),
});
