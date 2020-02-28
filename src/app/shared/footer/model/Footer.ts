import {SocialList} from './SocialLink';
import {PrivateLink} from './PrivateLink';

export interface Footer {
    message: string;
    socialList: SocialList[];
    privateLinks: PrivateLink[];
}
