import { FiYoutube as icon } from 'react-icons/fi';

export default {
  name: 'youtubeVideos',
  title: 'Youtube Videos',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Testimonial Name',
      type: 'string',
    },
    {
      name: 'youtubeUrl',
      title: 'URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'youtubeUrl',
    },
  },
};
