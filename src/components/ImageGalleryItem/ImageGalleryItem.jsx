import Modal from 'components/Modal';
import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  toggleModal = () => {
    this.setState(({ modalIsOpen }) => ({ modalIsOpen: !modalIsOpen }));
  };

  render() {
    const { webformatURL, tags, id, largeImageURL } = this.props;
    return (
      <li className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
          id={id}
        />
        {this.state.modalIsOpen && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            handleClose={this.toggleModal}
          />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
