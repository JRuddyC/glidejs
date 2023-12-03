'use client'
import React from 'react'
import { useEffect } from 'react';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Glide from '@glidejs/glide';
import styles from './styles.module.css';
import img1 from '../assets/deathwing.jpg'
import img2 from '../assets/ragnaros.webp'
const Carousel = ({ images }) => {

    // const images = [img1, img2]
    useEffect(() => {
        const glide = new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            focusAt: 'center',
            breakpoints: {
                800: {
                    perView: 1,
                },
                600: {
                    perView: 1,
                },
            },
        });

        glide.mount();

        document.querySelector('.glide__arrow--left').addEventListener('click', () => {
            glide.go('<');
        });

        document.querySelector('.glide__arrow--right').addEventListener('click', () => {
            glide.go('>');
        });
        return () => {
            glide.destroy();
        };
    }, [])
    return (
        <div>
                Este es un carousel hecho con glide js
                Hola mundoooooo
                Si les gusta este trabajo de copy/paste donenme :)
            <div className='glide  '>
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {images.map((image, index) => (
                            <li key={index} className="glide__slide" style={{display:'flex', justifyContent:'center'}}>
                                <img className={styles.imagesCarousel} src={image} alt={`Slide ${index + 1}`} loading='lazy'/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                    Anterior
                </button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                    Siguiente
                </button>
            </div>
        </div>
    )
}

export default Carousel