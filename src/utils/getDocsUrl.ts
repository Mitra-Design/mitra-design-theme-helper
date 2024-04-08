import { MitraDesignDocsURL } from "./constants";
import { toUpperCamelCase } from "./toCamelCase";

export const getDocsUrl = (tokenKey: string) => {
    const upperKey = toUpperCamelCase(tokenKey);

    return `${MitraDesignDocsURL}#${upperKey}`;

};
