import { GiReceiveMoney as icon } from 'react-icons/gi';

export default {
  name: 'supporters',
  title: 'Supporters',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Supporter Name',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Supporters Website',
      type: 'url',
    },
    {
      name: 'logo',
      title: 'Supporters Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
};
