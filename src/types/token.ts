export interface DesignTokenMetaItem {
    token: string;
    type?: string;
    name?: string;
    desc?: string;
    default?: any
}

export type DesignTokenMeta = Record<string, DesignTokenMetaItem>;
