import {ConcreteContent} from './ConcreteContent';

export default interface Content {
    title: string;
    routerLink: string;
    contents: ConcreteContent[];
}
