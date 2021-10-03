export const uuid = (): string =>
	Date.now().toString(36) + Math.random().toString(36).substr(2);

export const shuffle = <T>(array: T[]): T[] => {
	return array.sort(() => Math.random() - 0.5);
};
