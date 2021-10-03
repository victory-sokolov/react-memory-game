import React, { useState } from 'react';
import { Image } from '../types';
import './index.css';

export const Card: React.FC<Image> = ({ id, author, url }) => {
	const [rotateCard, setRotateCard] = useState<boolean>(false);
	const [isMatched, setIsMatched] = useState<boolean>(false);

	const onRotateCard = () => {
		setRotateCard(!rotateCard);
	};

	// Check if rotated cards are pairs
	const checkIfCardIsPair = () => {};

	return (
		<div className="board-card">
			<div
				key={id}
				className="card-inner"
				onClick={() => onRotateCard()}
				style={
					rotateCard
						? { transform: 'rotateY(180deg)' }
						: { transform: 'rotateY(0deg)' }
				}
			>
				<div className="card-front"></div>
				<div className="card-back">
					<img src={url} alt={author} />
				</div>
			</div>
		</div>
	);
};