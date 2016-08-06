import {Component, Injectable, Output, EventEmitter} from '@angular/core';
import {Control} from '@angular/common';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {YoutubeSearchService} from '../../services/youtubesearch.service';
import 'rxjs/Rx';

@Component({
    selector: 'my-typeahead',
    template: `<input type="text" [ngFormControl]="searchInput" placeholder="search youtube..."/>`,
    providers: [YoutubeSearchService, HTTP_PROVIDERS]
})

export class MyTypeAheadComponent {
 
    searchInput = new Control();
    @Output()
    onResponseChange  = new EventEmitter();
    constructor (private youtubesearchservice: YoutubeSearchService){
        this.searchInput.valueChanges
        .debounceTime(300)
        .map(value => youtubesearchservice.createSearchUrl(value))
        //.flatMap(url => this.youtubesearchservice.search(url), (request, response) => response.json())
        .switchMap(url => this.youtubesearchservice.search(url), (request, response) => response.json()) //cancels previous observer
        .map(video => video.items)
        .subscribe(videos => {
            this.onResponseChange.emit({ value: videos });
            // also it could be returned like a list of observables
            // and then these observables could be showed on a view with an '| json' or '| async'
        }); 
    }
}