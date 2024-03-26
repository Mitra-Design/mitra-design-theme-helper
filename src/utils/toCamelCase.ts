export const toCamelCase = (str: string) => {
    return str.replace(/\.[a-z0-9]/g, (letter) => letter.replace('.', '').toUpperCase());
};

export const toUpperCamelCase = (str: string) => {
    return str.replace(/-([a-z0-9])+/g, (letter) => {
        letter = letter.replace('-', '');
        return letter.charAt(0).toUpperCase() + letter.slice(1);
    });
};
