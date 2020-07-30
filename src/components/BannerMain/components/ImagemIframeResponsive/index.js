import React from 'react';
import { ImagemContainer, ResponsiveIframe } from '.styles';
import bgHome1 from './assets/img/bgHome1.jpg';


function ImagemBgIframeResponsive() {
    return (

        <ImagemContainer>
            <ResponsiveIframe
                title="Titulo do Iframe"
                src={bgHome1}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </ImagemContainer>

    );
}

export default ImagemBgIframeResponsive;