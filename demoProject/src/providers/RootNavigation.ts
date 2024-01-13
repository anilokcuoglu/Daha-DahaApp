import * as React from 'react';

export const navigationRef: any = React.createRef();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  if (navigationRef?.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
}

function navigationReset(name: string, params?: any) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name, params}],
  });
}

export default {
  navigate,
  goBack,
  navigationReset,
};
