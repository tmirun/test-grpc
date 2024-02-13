import { ConnectTransportOptions } from '@connectrpc/connect-web/dist/cjs/connect-transport';
import { InjectionToken, Provider } from '@angular/core';
import type { Interceptor, Transport } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-web';
import { INTERCEPTORS } from './client_provider';

export const TRANSPORT = new InjectionToken<Transport>("connect.transport");

type ProviderTransportArg = Omit<ConnectTransportOptions, 'interceptors'>

export function providerTransport (connectOptions: ProviderTransportArg,): Provider {
  return {
    provide: TRANSPORT,
    useFactory: function (interceptors: Interceptor[]) {
      return createConnectTransport({
        ...connectOptions,
        interceptors: interceptors,
      })
    },
    deps: [INTERCEPTORS],
  }
}
