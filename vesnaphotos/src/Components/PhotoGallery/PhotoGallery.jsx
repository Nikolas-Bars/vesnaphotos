import React, {useCallback, useState} from 'react';
import PhotoAlbum from "react-photo-album";
import Carousel, { Modal, ModalGateway } from "react-images";
import {photoArray} from "./PhotoArray";
import Gallery from "react-photo-gallery";


const PhotoGalery = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo = event.target.currentSrc, index  }) => {
        debugger
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div style={{maxWidth: '80%', margin: '50px auto'}} >
            <PhotoAlbum photos={photoArray} layout={"columns"}  onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photoArray.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>



        </div>
    );
};

export default PhotoGalery;
