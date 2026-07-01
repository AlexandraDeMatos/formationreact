import { emptyMeme, MemeSVGViewer, type ImageInterface, type MemeInterface } from "orsys-tjs-meme";
import FlexH1Grow from "../layouts/FlexH1Grow/FlexH1Grow";
import FlexV3Grow from "../layouts/FlexV3Grow/FlexV3Grow";
import MemeForm from "../MemeForm/MemeForm";
import Footer from "../uis/Footer/Footer";
import Header from "../uis/Header/Header";
import Navbar from "../uis/Navbar/Navbar";
import { useEffect, useState } from "react";
import {images as imagesFromJson} from '../../../db.json'
import { RESOURCES, REST_URL } from "../../config/constanteRest";
import Thumbnails from "../uis/Thumbnails/Thumbnails";

const App: React.FC<undefined> = () => {
  const [current, setCurrent] = useState(emptyMeme);
  const [images, setImages] = useState<Array<ImageInterface>>([])
  const [memes, setMemes] = useState<Array<MemeInterface>>([])

  useEffect(() => {
    //setImages(imagesFromJson)
    const promise1 = fetch(`${REST_URL}${RESOURCES.images}`)
    .then((response) => response.json());
    //.then((arr) => setImages(arr));

    const promise2 = fetch(`${REST_URL}${RESOURCES.memes}`)
    .then((response) => response.json());
    //.then((arr) => setMemes(arr));

    const timeout = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Timeout')
      }, 200);
    });

    const promiseAll = Promise.all([promise1, promise2]);

    Promise.race([promiseAll, timeout]).then(response => {
      if (typeof response === 'string') {
        console.log('TimeOut');
      } else {
        setImages((response as [ImageInterface[], MemeInterface[]])[0]);
        setMemes((response as [ImageInterface[], MemeInterface[]])[1]);
      }
    });
  }, []);

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

        <Thumbnails memes={memes} images={images}></Thumbnails>
      </FlexH1Grow>
      <Footer />
    </FlexV3Grow>
  );
};

export default App;
