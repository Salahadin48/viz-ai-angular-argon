import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {VizaiFooter} from './model/viz-ai-footer';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'  // <- ADD THIS
})
export class FooterService {

    constructor(private http: HttpClient) {
    }

    private userUrl = 'https://sleepy-wildwood-59504.herokuapp.com/';
    // private userUrl = 'http://localhost:8080/get/footer';
    // private userUrl = '/api';

    public getFooter() {
        return this.http.get<VizaiFooter>(this.userUrl);
    }

}
