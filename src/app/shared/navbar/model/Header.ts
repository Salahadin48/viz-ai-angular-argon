import {VizaiHeaderLinks} from './vizai-header-links';
import Logo from './Logo';
import Content from './Content';

export interface Header {
    // brandName: string;
    // listItems: VizaiHeaderLinks[];
    logo: Logo;
    contents: Content[];
    id: number;
}
