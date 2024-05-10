import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(TuiRootModule),
    provideStore(),
    provideState({name: TODO_REDUCER_NODE, reducer: todoReducer}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(),
  ]
};
