/// <reference types="react" />
interface ITextSchema {
    attributes: {
        text: string;
        textAlign: "left";
    };
    event: string;
    extra: {
        commonStyle: {
            [key: string]: any;
        };
    };
    isTpl: boolean;
}
declare const Text: (props: ITextSchema) => JSX.Element;
export default Text;
