import React from 'react';
import RootNavigation from './client/src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import store from './server/store';
import { QueryClientProvider } from 'react-query';
import queryClient from './server/src/queryClient';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <RootNavigation />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
