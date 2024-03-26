export const toKebabCase = (str: string) => {
    return str
        .replace(/[0-9]+/g, (letter: string) => `-${letter}`)
        .replace(/[A-Z]+/g, (letter: string) => `-${letter.toLowerCase()}`)
        .replace(/\.([a-z0-9])/g, (_, letter: string) => `-${letter.toLowerCase()}`);
};
