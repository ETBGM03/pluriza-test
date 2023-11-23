import React from 'react';
import {ProvidersApp} from './src/providers';
import {AppRouter} from './src/navigation';

export default function App() {
  return (
    <ProvidersApp>
      <AppRouter />
    </ProvidersApp>
  );
}
