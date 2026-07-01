import FlexH1Grow from "../layouts/FlexH1Grow/FlexH1Grow";
import FlexV3Grow from "../layouts/FlexV3Grow/FlexV3Grow";
import Footer from "../uis/Footer/Footer";
import Header from "../uis/Header/Header";
import Navbar from "../uis/Navbar/Navbar";
import '../../store/store'
import MemeSVGViewer from "../uis/MemeSVGViewer/MemeSVGViewer";
import MemeFormStore from "../MemeForm/MemeFormStore";

const App: React.FC = () => {
  
  return (
    <FlexV3Grow>
      <Header />
      <Navbar />
      <FlexH1Grow>
        {/* <MemeSVGViewer meme={current} image={images.find(image => image.id === current.imageId)} basePath="" />
        <MemeForm
          images={images}
          meme={current}
          onMemeChange={(newCurrent) => {
            setCurrent(newCurrent);
          }}
        /> */}

        {/* <Thumbnails memes={memes} images={images}/> */}
        <MemeSVGViewer/>
        <MemeFormStore />
      </FlexH1Grow>
      <Footer />
    </FlexV3Grow>
  );
};

export default App;
