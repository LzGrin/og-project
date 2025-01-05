import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authTokenInterceptor} from './auth/auth.intercepter';

export const appConfig: ApplicationConfig = {
  providers: [ // то, что мы отдаем - provide
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authTokenInterceptor]))
  ]
};
