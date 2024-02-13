import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
 import { providerTransport } from '../connect/transport_provider';
import { provideClient } from '../connect/client_provider';
import { PersonService } from '../gen/common/v1/person_connect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    providerTransport({
      baseUrl: "http://localhost:8080"
    }),
    provideClient(PersonService)
  ]
};
