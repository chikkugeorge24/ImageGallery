import React from 'react';
import Gallery from 'react-grid-gallery';

/** GridView of the Gallery */
const GalleryGrid = props => {
      return (
            <Gallery images={props.imageList} />
      );
};
export default GalleryGrid;
