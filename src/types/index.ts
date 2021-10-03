export type ImageIpsum = {
	id: string;
	author: string;
	download_url: string;
	url: string;
	height: number;
	width: number;
};

export type Image = Pick<ImageIpsum, 'id' | 'author' | 'url'>;
