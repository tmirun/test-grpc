import { InjectionToken, Provider } from '@angular/core';
import { createPromiseClient, Interceptor, Transport } from "@connectrpc/connect";
import { ServiceType } from '@bufbuild/protobuf';
import { createConnectTransport } from '@connectrpc/connect-web'
import { TRANSPORT } from './transport_provider';

export const INTERCEPTORS = new InjectionToken<Interceptor[]>(
  'connect.interceptors',
  {
    factory: () => [],
  }
)

interface ProvideClientArgs<T extends ServiceType> {
  transportToken: InjectionToken<Transport>,
  interceptorToken: InjectionToken<Interceptor[]>,
  connectOptions: Omit<Parameters<typeof createConnectTransport>[0], 'interceptors'>
  services: T
}

export function provideClient<T extends ServiceType>(service: T): Provider {
  return {
    provide: service,
    useFactory: (transport: Transport) => {
      return createPromiseClient(service, transport)
    },
    deps: [TRANSPORT]
  }
}


// export function provideClient<T extends ServiceType>(service: T): Provider {
//   return {
//     provide: service,
//     useFactory: (transport: Transport) => {
//       return createObservableClient(service, transport);
//     },
//     useFactory: (interceptors: Interceptor[]) =>
//         createConnectTransport({
//           ...args.connectOptions,
//           interceptors: interceptors,
//         }),
//     deps: [TRANSPORT],
//   };
// }

// export const provideClient = (args: ProvideClientArgs): Array<Provider> => {
//   return [
//     {
//       provide: args.transportToken,
//       useFactory: (interceptors: Interceptor[]) =>
//         createConnectTransport({
//           ...args.connectOptions,
//           interceptors: interceptors,
//         }),
//       deps: [args.interceptorToken]
//     }
//   ]
// }

// export function provideClient<T extends ServiceType>(service: T): Provider {
//   return {
//     provide: service,
//     useFactory: (transport: Transport) => {
//       return createObservableClient(service, transport);
//     },
//     deps: [TRANSPORT],
//   };
// }
