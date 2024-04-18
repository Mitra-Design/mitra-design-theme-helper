export const toCamelCase = (str: string) => {
    return str.replace(/\.[a-z0-9]/g, (letter) => letter.replace('.', '').toUpperCase());
};

const sizeKeys = ['XS', 'SM', 'MD', 'LG', 'XL'];

export const toUpperCamelCase = (str: string) => {
    return str.replace(/-([a-z0-9])+/g, (letter) => {
        letter = letter.replace('-', '');
        const key = sizeKeys.find(item => item.toLowerCase() === letter);
        if (key) {
            return key;
        }
        return letter.charAt(0).toUpperCase() + letter.slice(1);
    });
};
