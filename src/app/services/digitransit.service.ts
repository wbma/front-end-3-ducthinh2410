import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
      headers: new HttpHeaders().set('Content-type', 'application/graphql')
    };

@Injectable()
export class DigitransitService {

  private baseURL: string = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor(private http: HttpClient){ }

  searchStopsByName(name: String) {
    if (!name.trim()) {
      return of([]);
    }

    const url =  `${this.baseURL}`;
    this.http.get(`${this.baseURL}`, httpOptions);
  }

  routesPassStop(stopName: string) {

    const body = `{
                  stops(name: "${stopName}") {
                    name
                    patterns {
                      name
                      route	{
                      shortName
                      longName
    		              }
    		            directionId
		                }
	                }
                }`;

    return this.http.post(`${this.baseURL}`, body, httpOptions);
  }
}
