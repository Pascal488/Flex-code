import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri : '',
  cache: new InMemoryCache(),
})
root.render(
  
  <ApolloProvider client={client}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  </ApolloProvider>,
  
);


