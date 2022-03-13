export interface IEditSchema {
    properties: {
        [key: string]: {
            title: string;
            default: string;
            type: string;
            [key: string]: any;
        };
    };
    events: {
        name: string;
        title: string;
        function: string;
    }[];
    meta: {
        id: string;
        title: string;
        description: string;
        icon: string;
        category: "base" | "other";
        componentOrder: number;
    };
}
declare const Edit: IEditSchema;
export default Edit;
