import "./App.css";
import Section from "./components/Section";
import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Section>
        <Container>
          <Searchbar />
          <ImageGallery>
            <ImageGalleryItem></ImageGalleryItem>
          </ImageGallery>
          <Button></Button>
        </Container>
      </Section>
    </div>
  );
}

export default App;
