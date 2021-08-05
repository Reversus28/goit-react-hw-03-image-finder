import React, { Component, createContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Section from "./components/Section";
import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal/";

export default class App extends Component {
  state = {
    searchQuery: "",
    showModal: false,
    largeImage: "",
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  formSubmitHandler = (searchQuery) => {
    this.setState({
      searchQuery: searchQuery.trim(),
    });
  };

  getImageLargeSize = (e) => {
    this.setState({
      largeImage: e.target.getAttribute("data-image"),
    });

    this.toggleModal();
  };

  render() {
    const { searchQuery, showModal, largeImage } = this.state;

    return (
      <div className="App">
        {showModal && (
          <Modal onClose={this.toggleModal} modalImage={largeImage} />
        )}
        <Section>
          <Container>
            <Searchbar onSubmit={this.formSubmitHandler} />
            <ImageGallery
              searchQuery={searchQuery}
              onOpenModal={this.getImageLargeSize}
            />
          </Container>
        </Section>
        <ToastContainer />
      </div>
    );
  }
}
