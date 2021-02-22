import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import EducationList from './components/EducationList';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <EducationList />
    </QueryClientProvider>
  );
}

export default App;
