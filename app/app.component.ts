import { Component } from '@angular/core';
import {Http, HTTP_PROVIDERS, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {TypeAheadDemoComponent} from './typeaheaddemo.component'

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1> Hello<typeahead-demo></typeahead-demo>'
            ,
    directives: [TypeAheadDemoComponent] 
                
})
export class AppComponent { }