import { gql } from "@apollo/client/core";

export const ADD_TASK = gql`
  mutation addTask($title: String!, $defaultCoins: Int!, $description: String) {
    addTask(
      input: {
        title: $title
        defaultCoins: $defaultCoins
        description: $description
      }
    ) {
      id
      title
      description
      defaultCoins
    }
  }
`;

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

export const GET_TASK = gql`
  query getTask($taskId: ID!) {
    getTask(taskId: $taskId) {
      id
      title
      description
      defaultCoins
    }
  }
`;
