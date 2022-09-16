import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ data }) {
  return (
    <ul className={s.ImageGallery}>
      {data.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          id={id}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}
