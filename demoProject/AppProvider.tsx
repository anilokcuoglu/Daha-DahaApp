import {QueryClient} from '@tanstack/react-query';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import React from 'react';
import {Keyboard} from 'react-native';
import {mmkvStoragePersister} from './src/providers/LocalStorage';
// import {Provider as StoreProvider} from 'react-redux';
// import store from './src/store/store';
import App from './App';
import {navigationRef} from './src/providers/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onMutate: () => {
        Keyboard.dismiss();
      },
    },
  },
});

const AppProvider = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister: mmkvStoragePersister}}>
      {/* <StoreProvider store={store}> */}
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer ref={navigationRef}>{<App />}</NavigationContainer>
      </GestureHandlerRootView>
      {/* </StoreProvider> */}
    </PersistQueryClientProvider>
  );
};

export default AppProvider;
