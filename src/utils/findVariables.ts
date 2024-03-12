import * as fs from 'node:fs';

const LESS_VARIABLES_REG = /(\@[^:\s]+):[\s]*([^;]+);/g;

export const findVariables = (lessPath: string) => {
    const variables: any = {};

    if (fs.existsSync(lessPath)) {
        const content = fs.readFileSync(lessPath, 'utf-8').toString();
        let matched;

        while ((matched = LESS_VARIABLES_REG.exec(content)) !== null) {
            variables[matched[1]] = matched[2];
        }
    }

    return variables;
};
