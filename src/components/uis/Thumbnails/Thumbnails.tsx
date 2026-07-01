import type { FC } from 'react';
import styles from './Thumbnails.module.css';
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import ThumbnailItem from '../ThumbnailItem/ThumbnailItem';

interface ThumbnailsProps {
  images: Array<ImageInterface>,
  memes: Array<MemeInterface>,
}

const Thumbnails: FC<ThumbnailsProps> = ({memes, images}) => (
  <div className={styles.Thumbnails} data-testid="Thumbnails">
    {memes.map((m, i) => {
      return <ThumbnailItem key={i} meme={m} image={images.find(img => img.id === m.imageId)}/>
    })}
  </div>
);

export default Thumbnails;
