const { Text, Relationship, Slug } = require('@keystonejs/fields')
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce')

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    excerpt: {
      type: Text,
      isMultiline: true,
    },
    content: { type: Wysiwyg },
    // By default, slugs are generated from a name or title field (in that order) if they exist.
    name: { type: Slug },
    featuredImage: {
      type: Relationship,
      ref: 'Image',
    },
    slideImages: {
      type: Relationship,
      ref: 'SlideImage',
      many: true,
    },
  },
}
