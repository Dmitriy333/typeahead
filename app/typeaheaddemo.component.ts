import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {MyTypeAheadComponent} from './mytypeahead.component'

const makeYoutubeVideoUrl = (videoId: string) => `https://www.youtube.com/watch?v=${videoId}`;

@Component({
    selector : 'typeahead-demo',
    template : `<h2>typeahead demo</h2><my-typeahead (onResponseChange) = responseChange($event)></my-typeahead>
                <ul>
                    <li *ngFor="let video of videos"><a [href]='video.url'>{{video.title}}</a></li>
                </ul>
    `,
    directives: [MyTypeAheadComponent]
})

export class TypeAheadDemoComponent {
    videos: Array<string> = [];

    responseChange(event: any) {
        this.videos = event.value.map((video: any) => {
            console.log(video);
            return {
                'url': makeYoutubeVideoUrl(video.id.videoId),
                'title': video.snippet.title
            }
        });
    }
}