const needAddUnit = ['font-size', 'border-radius', 'size'];

export const valueNeedAddPx = (value: string) => {
    return needAddUnit.some((unit) => value.includes(unit));
};
