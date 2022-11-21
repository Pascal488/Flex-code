import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/barlow";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

root.render(
  
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
   
);
