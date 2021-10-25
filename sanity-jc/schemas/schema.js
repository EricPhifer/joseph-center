// import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// give schema to the builder and provide the result to Sanity

import homepage from './home';
import programs from './programs';
import privacyPolicy from './privacyPolicy';
import termsConditions from './termsConditions';
import board from './board';
import images from './images';
import supporters from './supporters';
import videos from './videos';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    homepage,
    programs,
    board,
    images,
    supporters,
    videos,
    privacyPolicy,
    termsConditions,
  ]),
});
