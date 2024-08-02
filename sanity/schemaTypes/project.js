import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'project',
  title: 'project',
  type: 'document',
  fields: [
    defineField({
      name: "project",
      type: "string",
      title: "Project name",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "desc",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "gridtype",
      type: "string",
      title: "Grid type",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "description",
      type: "array",
      title: "Project Description",
      of: [
        {
          type: "block",
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Code', value: 'code' }
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  }
                ]
              }
            ]
          }
        }
      ]
    }),    
    defineField({
      name: "image",
      type: "array",
      of: [{ type: "image" }],
      title: "Project image"
    }),
    defineField({
      name: "category",
      type: "array",
      title: "Project category",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (Rule) => Rule.required()
    })
  ],
});
