import React from 'react';
import PhotoGallery from '../components/PhotoGallery';
import StoryTimeline from '../components/StoryTimeline';

export default function Memories() {
  return (
    <div className="pt-24 pb-16">
      <PhotoGallery />
      <StoryTimeline />
    </div>
  );
}
