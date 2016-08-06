import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import {MyTypeAheadComponent} from './components/typeahead/mytypeahead.component';
import {TypeAheadDemoComponent} from './components/typeahead/typeaheaddemo.component';

bootstrap(AppComponent,[TypeAheadDemoComponent,MyTypeAheadComponent] );
