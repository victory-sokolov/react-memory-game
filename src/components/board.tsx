import React, { useEffect, useState } from 'react'
import { setUpImageDeck } from '../imageService';
import {Image} from '../types';
import { Card } from './card';
import './index.css';

export const Board: React.FC = () => {

	const [images, setImages] = useState<Image[]>([]);

	useEffect(() => {
		const getImages = async () => {
			const images = await setUpImageDeck();
			console.log(images)
			setImages(images);
		}
		getImages();
	}, [])


    return (
			<div className="board-wrapper">
				{images.map((image: Image) => (
					<Card
						id={image.id}
						author={image.author}
						url={image.url}
					/>
				))}
			</div>
		);

}