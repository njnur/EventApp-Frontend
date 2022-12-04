import React from 'react';
import RoutesCollection from './routes/router';
import './style/less/App.less';
import { GlobalStyle } from './style/globalStyle';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        cacheTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider componentSize={'large'}>
        <div className="App">
          <Toaster position="top-center" reverseOrder={false} />
          <GlobalStyle />
          <RoutesCollection />
        </div>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
