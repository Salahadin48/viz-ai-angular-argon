import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {VizaiHeader} from './model/vizai-header';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class HeaderService {

  constructor(private http: HttpClient) {}

  private userUrl = 'https://cryptic-lowlands-72171.herokuapp.com/';
  //http://localhost:8080/';
  // private userUrl = '/api';

  public getHeader() {
    return  this.http.get<VizaiHeader>(this.userUrl);
  }

}
