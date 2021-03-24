import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Container } from "react-bootstrap";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7451-compressed.jpg",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7435-compressed.jpg",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7412-compressed.jpg",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7416-compressed.jpg",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7412-compressed.jpg",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7364-compressed.jpg",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7348-compressed.jpg",
    width: 3,
    height: 4,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7329-compressed.jpg",
    width: 6,
    height: 4,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7320-compressed.jpg",
    width: 7,
    height: 4,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7357-compressed.jpg",
    width: 8,
    height: 4,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7355-compressed.jpg",
    width: 8,
    height: 4,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7410.jpg",
    width: 7,
    height: 4,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7373-compressed.jpg",
    width: 6,
    height: 3,
  },
  {
    src:
      "https://www.citilinkedselfstorage.com.au/wp-content/uploads/2017/11/IMG_7370-compressed.jpg",
    width: 5,
    height: 3,
  },
];

const GalleryPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <React.Fragment>
      <Container fluid className="gallery-heading-container">
        <Container>
          <h1 className="py-4">Gallery</h1>
        </Container>
      </Container>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </React.Fragment>
  );
};

export default GalleryPage;
