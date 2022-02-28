import { MdPeopleOutline as icon } from 'react-icons/md';

export default {
  name: 'boardMembers',
  title: 'Board Members',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Board Member Name',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Board Members Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
