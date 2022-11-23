import { useLazyQuery, gql } from "@apollo/client";


export const LoginQuery = gql`
  query Login($login: Login!) {
    login(login: $login) {
      id
      firstName
      middleName
      bio
      email
      lastName
      name
      username
      dp
      verified
      enabled
      created
      lastUpdated
      token
      total
      userCover
      creator
      twoFa
    }
  }
`;