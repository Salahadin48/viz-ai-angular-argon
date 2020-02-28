import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {PopStateEvent} from '@angular/common';
import {VizaiHeader} from '../navbar/model/vizai-header';
import {FooterService} from './FooterService';
import {VizaiFooter} from './model/viz-ai-footer';
import {SocialList} from './model/SocialLink';
import {PrivateLink} from './model/PrivateLink';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test: Date = new Date();

    message: string;
    socialList: SocialList[];
    privateLinks: PrivateLink[];
    socials = ['btn btn-neutral btn-icon-only btn-round btn-lg btn-twitter',
        'btn btn-neutral btn-icon-only btn-round btn-lg  btn-facebook',
        'btn btn-neutral btn-icon-only btn-round btn-lg  btn-dribbble',
        'btn btn-neutral btn-icon-only btn-round btn-lg  btn-github'];
    toolTip = ['Follow us', 'Like us', 'Follow us', 'Star on Github'];

    constructor(private router: Router, private footerService: FooterService) {
    }

    ngOnInit() {
        this.footerService.getFooter().pipe()
            .subscribe((data: VizaiFooter) => {
                console.log('R: ' + JSON.stringify(data));
                // this.brandName = data.header.brandName;
                // this.listItems = data.header.listItems;
                this.message = data.footer.message;
                this.socialList = data.footer.socialList;
                this.privateLinks = data.footer.privateLinks;
            });
        this.printSocials();
    }

    getPath() {
        return this.router.url;
    }

    printSocials() {
        console.log('Socials: ' + this.socials);
    }
}
