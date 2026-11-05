import { CONFIG } from './config';

export const galleryCategories = CONFIG.galleryCategories;
export const galleryPhotos = CONFIG.galleryPhotos;
export const movieRows = CONFIG.rows;

export const getPhotosByCategory = (category) => {
  if (!category || category === "All Memories") {
    return CONFIG.galleryPhotos;
  }
  return CONFIG.galleryPhotos.filter(photo => photo.category === category);
};

export default {
  categories: galleryCategories,
  photos: galleryPhotos,
  rows: movieRows,
  getPhotosByCategory
};
