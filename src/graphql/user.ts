import { gql } from "@apollo/client/core";

export const GET_USER_INFO = gql`
  query getUserInfo {
    getUserInfo {
      id
      username
      email
      fullname
      birthday
      maxAge
    }
  }
`;
