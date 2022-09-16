import { Component } from 'react';
import s from './App.module.css';
import Btn from './Btn';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Searchbar from './Searchbar';
import getImages from './services';

const STATUS = {
  idle: 'idle',
  pending: 'pending',
  rejected: 'loaded',
  resolved: 'resolved',
};

export class App extends Component {
  state = {
    searchQuery: null,
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
    status: 'idle',
    error: null,
  };

  onFormSubmit = async searchQuery => {
    if (this.state.searchQuery === searchQuery)
      return console.log('поставь нотификашку что выберите что-то ещё');
    this.setState({ isLoading: true });

    try {
      const {
        data: { hits, totalHits },
      } = await getImages(searchQuery, 1);

      this.setState(_ => ({
        searchQuery,
        images: [...hits],
        page: 1,
        totalHits: totalHits,
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
      console.log('Нотификашка про ошибку и рендер ошибки');
    }
  };

  handleClick = async () => {
    try {
      const { page, searchQuery } = this.state;
      this.setState({ isLoading: true });

      const {
        data: { hits },
      } = await getImages(searchQuery, page + 1);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        page: prevState.page + 1,
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
      console.log('Нотификашка про ошибку и рендер ошибки');
    }
  };

  render() {
    const { images, totalHits, isLoading, error } = this.state;
    console.log(this.state);
    return (
      <div className={s.container}>
        {error && <h2>Перезагружай страницу, ато сломалось</h2>}
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery data={images} />
        {images.length > 0 && images.length < totalHits && (
          <Btn onClick={this.handleClick} />
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
