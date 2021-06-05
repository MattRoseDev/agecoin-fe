import { gql } from "@apollo/client/core";

export const GET_TASKS = gql`
  query getTasks {
    getTasks {
      id
      title
      description
      defaultCoins
    }
  }
`;
