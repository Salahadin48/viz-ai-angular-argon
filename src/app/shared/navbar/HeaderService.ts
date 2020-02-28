import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {VizaiHeader} from './model/vizai-header';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'  // <- ADD THIS
})
export class HeaderService {

    constructor(private http: HttpClient) {
    }

    private userUrl = 'https://sleepy-wildwood-59504.herokuapp.com/get/header';
    // private userUrl = 'http://localhost:8080/get/header';
    // private userUrl = '/api';

    public getHeader() {
        return this.http.get<VizaiHeader>(this.userUrl);
    }

}
