export interface DesignTokenMetaItem {
    token: string;
    type?: string;
    name?: string;
    desc?: string;
    default?: any;
    deprecated?: string;
}

export type DesignTokenMeta = Record<string, DesignTokenMetaItem>;
