import React, { useEffect, useState } from 'react';
import { Alert } from 'antd';

import GalleryGrid from './GalleryGrid';
import useSpinner from '../Spinner/useSpinner';

/** DashBoard Of the Gallery where Images are loaded in a grid */
const DashBoard = () => {
      const [images, setImages] = useState([]);
      const [spinner, showSpinner, hideSpinner] = useSpinner();
      const [isLoaded, setIsLoaded] = useState(true);
      const DashBoardTitle = {
            fontWeight: "500",
            border: "inset",
            backgroundColor: "#5555",
            fontVariant: "petite-caps",
            fontSize: "x-large"
      };
      useEffect(() => {
            showSpinner();
            fetch("https://api.thecatapi.com/v1/images/search?limit=10")
                  .then(response => {
                        if (!response.ok) {
                              throw Error("Images Not Found");
                        }
                        return response.json();
                  })
                  .then(resultData => {
                        const imageList = resultData.map(image => {
                              const { url } = image;
                              return {
                                    src: url,
                                    thumbnail: url
                              };
                        });
                        setImages(imageList);
                        setTimeout(() => hideSpinner(), setIsLoaded(false), 5000);
                  })
                  .catch(err => {
                        throw Error(err.message);
                  });
      }, []);
      return (
            <div className="container-fluid h-100">
                  <div className="row">
                        <Alert message="Image Gallery" style={DashBoardTitle} />
                  </div>
                  {
                        isLoaded ? spinner :
                        <div className="row d-flex">
                              <GalleryGrid imageList={images} />
                        </div>
                  }

            </div>
      );
};
export default DashBoard;
