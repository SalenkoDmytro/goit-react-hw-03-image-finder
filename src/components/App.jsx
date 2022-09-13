import { Component } from 'react';
import s from './App.module.css';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';

const KEY = '29082110-259fa3573f07e09f564e9c4c2';

export class App extends Component {
  state = {
    searchQuery: null,
  };

  async componentDidUpdate() {
    const { searchQuery } = this.state;
    console.log(searchQuery);
    const response = await fetch(
      `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    console.log(response);
  }

  onFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery />
      </div>
    );
  }
}
