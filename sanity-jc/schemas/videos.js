import React from 'react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import { FiYoutube as icon } from 'react-icons/fi';

const Preview = ({ value }) => {
  const { url } = value;
  const id = getYouTubeId(url);
  return <YouTube videoId={id} />;
};

export default {
  name: 'youtubeVideos',
  title: 'Youtube Videos',
  type: 'object',
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
      url: 'youtubeUrl',
    },
    component: Preview,
  },
};
