const { Text, Relationship, Slug, Integer } = require('@keystonejs/fields')

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    order: {
      type: Integer,
      isRequired: true,
    },
    // By default, slugs are generated from a name or title field (in that order) if they exist.
    name: { type: Slug },
    link: {
      type: Relationship,
      ref: 'Page',
    },
    subLinks: {
      type: Relationship,
      ref: 'Project',
      many: true,
    },
  },
}
