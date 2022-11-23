import { useMutation, gql } from "@apollo/client";
export const Userdata = gql`
  mutation Register($user: UserInput!) {
    register(user: $user) {
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