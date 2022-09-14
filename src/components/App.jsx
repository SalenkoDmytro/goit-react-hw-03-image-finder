import { Component } from 'react';
import s from './App.module.css';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
const axios = require('axios');

export class App extends Component {
  state = {
    searchQuery: null,
    images: [],
    page: 1,
    totalHits: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    await this.getImagesData();
  }

  getImagesData = async () => {
    const { searchQuery, page, images } = this.state;

    const KEY = '29082110-259fa3573f07e09f564e9c4c2';
    const url = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(url);
    this.setState(prevState => ({
      images: [...prevState.images, ...response.data.hits],
    }));
  };

  onFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    console.log(this.state.images);
    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery />
      </div>
    );
  }
}
