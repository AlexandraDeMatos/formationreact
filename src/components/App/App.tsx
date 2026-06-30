import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";
import FlexH1Grow from "../layouts/FlexH1Grow/FlexH1Grow";
import FlexV3Grow from "../layouts/FlexV3Grow/FlexV3Grow";
import MemeForm from "../MemeForm/MemeForm";
import Footer from "../uis/Footer/Footer";
import Header from "../uis/Header/Header";
import Navbar from "../uis/Navbar/Navbar";
import { useEffect, useState } from "react";
import {images as imagesFromJson} from '../../../db.json'

const App: React.FC<undefined> = () => {
  const [current, setCurrent] = useState(emptyMeme);
  const [images, setImages] = useState<Array<ImageInterface>>([])

  useEffect(() => {
    setImages(imagesFromJson)
  }, [])

  return (
    <FlexV3Grow>
      <Header />
      <Navbar />
      <FlexH1Grow>
        <MemeSVGViewer meme={current} image={undefined} basePath="" />
        <MemeForm
          images={imagesFromJson}
          meme={current}
          onMemeChange={(newCurrent) => {
            setCurrent(newCurrent);
          }}
        />
      </FlexH1Grow>
      <Footer />
    </FlexV3Grow>
  );
};

export default App;
