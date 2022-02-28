import { GrServices as icon } from 'react-icons/gr';

export default {
  name: 'programs',
  title: 'Programs',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Program Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'hours',
      title: 'Program Hours of Operation',
      type: 'string',
    },
    {
      name: 'goal',
      title: 'Program Goal',
      type: 'string',
    },
    {
      name: 'contents',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'content',
          type: 'text',
        },
      ],
    },
    {
      name: 'services',
      title: 'Services Provided in Program',
      type: 'array',
      of: [
        {
          name: 'service',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
