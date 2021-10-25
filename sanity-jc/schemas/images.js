import { FaRegImage as icon } from 'react-icons/fa';

export default {
  name: 'images',
  title: 'Images',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Image Title',
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
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
