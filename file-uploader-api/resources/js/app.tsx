import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client'
import {createInertiaApp } from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {LangProvider} from './contexts/LangContext';
import './assets/scss/index.scss';

createInertiaApp({
  // @ts-ignore
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`,import.meta.glob('./Pages/**/*.tsx')),
  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <Provider store={store}>
          <LangProvider>
            <App {...props} />
          </LangProvider>
        </Provider>
      </StrictMode>
    )
  },
})
