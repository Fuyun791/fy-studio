export interface ITextSchema {
    editData: {
        key: string;
        name: string;
        type: string;
        [key: string]: any;
    }[];
    config: {
        text: string;
        color: string;
        fontSize: number;
        align: string;
        lineHeight: number;
    };
    meta: {
        id: string;
        title: string;
        description: string;
        icon: string;
        category: "base" | "other";
        componentOrder: number;
    };
}
declare const Text: ITextSchema;
export default Text;
