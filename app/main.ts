import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import {MyTypeAheadComponent} from './mytypeahead.component';
import {TypeAheadDemoComponent} from './typeaheaddemo.component';

bootstrap(AppComponent,[TypeAheadDemoComponent,MyTypeAheadComponent] );
