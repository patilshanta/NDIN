/**
 * To bootstrap mobile or web module
 * bootstrapModule(WebAppModule) -- represents web application
 * bootstrapModule(AppModule) -- represents mobile application
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './mobile/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
