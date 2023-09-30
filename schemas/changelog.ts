import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'changelog',
  title: 'Changelog',
  type: 'document',
  fields: [
    defineField({
      name: 'version',
      title: 'Version',
      type: 'string'
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date'
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          title: 'Feature',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                {
                  type: 'block'
                }
              ]
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'improvements',
      title: 'Improvements',
      type: 'array',
      of: [
        {
          title: 'Improvement',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                {
                  type: 'block'
                }
              ]
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'fixes',
      title: 'Bug Fixes',
      type: 'array',
      of: [
        {
          title: 'Fix',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                {
                  type: 'block'
                }
              ]
            })
          ]
        }
      ]
    })
  ]
})