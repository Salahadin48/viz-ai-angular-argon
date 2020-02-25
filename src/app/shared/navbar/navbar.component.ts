import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';
import {Location, PopStateEvent} from '@angular/common';
import {VizaiHeaderLinks} from './model/vizai-header-links';
import {HeaderService} from './HeaderService';
import {VizaiHeader} from './model/vizai-header';
import Logo from './model/Logo';
import {Header} from './model/Header';
import Content from './model/Content';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    // brandName: string;
    // listItems: VizaiHeaderLinks[];

    href: string;
    imageUrl: string;
    contents: Content[];

    constructor(public location: Location, private router: Router, private headerService: HeaderService) {
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
            if (event instanceof NavigationStart) {
                // tslint:disable-next-line:triple-equals
                if (event.url !== this.lastPoppedUrl) {
                    this.yScrollStack.push(window.scrollY);
                }
            } else if (event instanceof NavigationEnd) {
                if (event.url === this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else {
                    window.scrollTo(0, 0);
                }
            }
        });
        this.location.subscribe((ev: PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
        this.headerService.getHeader().pipe()
            .subscribe((data: VizaiHeader) => {
                console.log('R: ' + JSON.stringify(data.header));
                // this.brandName = data.header.brandName;
                // this.listItems = data.header.listItems;
                this.href = data.header.logo.href;
                this.imageUrl = data.header.logo.imageUrl;
            });
    }

    isHome() {
        const titlee = this.location.prepareExternalUrl(this.location.path());

        if (titlee === '#/home') {
            return true;
        } else {
            return false;
        }
    }

    isDocumentation() {
        const titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        } else {
            return false;
        }
    }
}
