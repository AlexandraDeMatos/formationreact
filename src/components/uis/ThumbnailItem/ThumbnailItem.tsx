import type { FC } from 'react';
import styles from './ThumbnailItem.module.css';
import { MemeSVGViewer, type ImageInterface, type MemeInterface } from 'orsys-tjs-meme';

interface ThumbnailItemProps {
  meme: MemeInterface,
  image: ImageInterface|undefined
}

const ThumbnailItem: FC<ThumbnailItemProps> = ({meme, image}) => (
  <div className={styles.ThumbnailItem} data-testid="ThumbnailItem">
    <MemeSVGViewer meme={meme} image={image} basePath=''/>
  </div>
);

export default ThumbnailItem;
