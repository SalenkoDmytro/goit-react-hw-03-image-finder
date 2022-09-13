import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery() {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
}
