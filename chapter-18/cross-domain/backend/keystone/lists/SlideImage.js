const { File, Text, Slug, Relationship } = require('@keystonejs/fields')
const { LocalFileAdapter } = require('@keystonejs/file-adapters')

const fileAdapter = new LocalFileAdapter({
  src: './public/files',
  path: '/public/files',
})

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true
    },
    alt: { type: Text },
    caption: {
      type: Text,
      isMultiline: true
    },
    name: { type: Slug },
    link: {
      type: Relationship,
      ref: 'Project'
    },
    file: {
      type: File,
      adapter: fileAdapter,
      isRequired: true,

      // Takes a file object (such as the one returned in file field
      // hooks) and deletes that file from disk.
      // https://www.keystonejs.com/keystonejs/file-adapters/#methods
      hooks: {
        beforeChange: async ({ existingItem }) => {
          if (existingItem && existingItem.file) {
            await fileAdapter.delete(existingItem.file)
          }
        },
      },
    },
  },
  hooks: {
    afterDelete: async ({ existingItem }) => {
      if (existingItem.file) {
        await fileAdapter.delete(existingItem.file)
      }
    },
  },
}
