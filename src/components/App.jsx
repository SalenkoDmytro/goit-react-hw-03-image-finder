import { Component } from 'react';
import s from './App.module.css';
import Btn from './Btn';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import getImages from './services';

export class App extends Component {
  state = {
    searchQuery: null,
    images: [],
    page: 1,
    totalHits: 0,
  };

  onFormSubmit = async searchQuery => {
    if (this.state.searchQuery === searchQuery)
      return console.log('поставь нотификашку что выберите что-то ещё');

    this.getNewImages(searchQuery);
  };

  handleClick = async e => {
    const { searchQuery, page } = this.state;
    const {
      data: { hits, totalHits },
    } = await getImages(searchQuery, page + 1);

    this.setState(({ images, page }) => ({
      images: [...images, ...hits],
      page: page + 1,
      totalHits: totalHits,
    }));
  };

  getNewImages = async searchQuery => {
    const {
      data: { hits, totalHits },
    } = await getImages(searchQuery, this.state.page);

    this.setState(_ => ({
      searchQuery,
      images: [...hits],
      page: 1,
      totalHits: totalHits,
    }));
  };

  render() {
    const { images, totalHits } = this.state;
    console.log(this.state);
    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery data={images} />
        {images.length > 0 && images.length <= totalHits && (
          <Btn onClick={this.handleClick} />
        )}
      </div>
    );
  }
}
