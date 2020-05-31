const { Text, Checkbox, Relationship } = require('@keystonejs/fields')

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    description: {
      type: Text,
      isRequired: true,
    },
    isComplete: {
      type: Checkbox,
      defaultValue: false,
    },
    images: {
      type: Relationship,
      ref: 'Image',
      many: true
    },
  },
}
