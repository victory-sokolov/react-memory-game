import {
	BASE_URL,
	PAGE_SIZE,
	PAGE_LIMIT,
	DECK_SIZE,
	IMAGE_SIZE
} from './constants';
import { Image, ImageIpsum } from './types';
import { shuffle, uuid } from './utils';

const fetchImages = async (): Promise<ImageIpsum[]> => {
	const url = `${BASE_URL}/v2/list/?page=${PAGE_SIZE}&limit=${PAGE_LIMIT}`;
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json();
};

const getRandomImages = async (): Promise<ImageIpsum[]> => {
	const images = await fetchImages();
	const deck: Set<ImageIpsum> = new Set();

	while (deck.size < DECK_SIZE) {
		deck.add(images[Math.floor(Math.random() * images.length)]);
	}
	return Array.from(deck);
};

export const setUpImageDeck = async (): Promise<Image[]> => {
	const images = await getRandomImages();
	const newDeck = images.map((image: ImageIpsum, index: number) => ({
		id: image.id,
		author: image.author,
		url: `${BASE_URL}/id/${image.id}/${IMAGE_SIZE.width}/${IMAGE_SIZE.height}`
	}));

	return shuffle(newDeck);
};
