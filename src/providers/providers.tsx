import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PropsWithChildren} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

export function ProvidersApp(props: PropsWithChildren) {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
