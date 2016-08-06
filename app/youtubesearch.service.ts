import {Component, Injectable } from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";


const BASE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
const API_TOKEN = 'AIzaSyDwfVgBfyOvAsoQnqCsocdDNsiUqWkkR2U';
export const makeURL = (query: any) => `${BASE_URL}&q=${query}&key=${API_TOKEN}`;

@Injectable()
export class YoutubeSearchService {
    constructor (private http: Http) {
    }

    search(value: string): Observable<Response> {
        return this.http.get(value);
    }

    createSearchUrl(value: any) {
        let makeUrlCallback = makeURL;
        return makeUrlCallback(value);
    }
}