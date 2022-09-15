import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    bmodalIsOpen: false,
  };

  handleClick = event => {
    console.log(event.target.id);
  };

  render() {
    const { webformatURL, tags, id } = this.props;
    return (
      <li className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={this.handleClick}
          id={id}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
