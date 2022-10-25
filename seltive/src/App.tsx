import { Sign } from 'crypto';
import React from 'react';

import Allauthpages from './components/authpages/Allauthpages';
import {useQuery, gql} from '@apollo/client';


// export const Userdata = gql`
// query GetUsers($params: Params!) {
//   getUsers(params: $params) {
//     id
//     firstName
//     middleName
//     bio
//     email
//     lastName
//     name
//     username
//     dp
//     verified
//     enabled
//     created
//     lastUpdated
//     token
//     total
//     userCover
//     creator
//     twoFa
//   }
// }
// `

function App() {
  // const {loading, error, data} = useQuery(Userdata,{variables:{params:{}}});
  // console.log(data)

  // if(loading) return(<> Loading</>);
  // if(error) return(<>{JSON.stringify(error)}</>)
  // return (
  //  <>
  //  {JSON.stringify(data)}
  //  </>);
   return (
    <div >
     <Allauthpages/> 

      {/* <Try/> */}
    </div>
  );
}

export default App;
