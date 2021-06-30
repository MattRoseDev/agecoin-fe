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
      coins
      active
      status
    }
  }
`;

export const START_TASK = gql`
  mutation start($taskId: ID!) {
    start(taskId: $taskId) {
      id
      title
      description
      defaultCoins
      coins
      active
      status
    }
  }
`;

export const EDIT_TASK = gql`
  mutation editTask(
    $taskId: ID!
    $title: String
    $defaultCoins: Int
    $description: String
  ) {
    editTask(
      taskId: $taskId
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
      coins
      active
      status
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($taskId: ID!) {
    deleteTask(taskId: $taskId) {
      id
      title
      description
      defaultCoins
      coins
      active
      status
    }
  }
`;

export const GET_TASKS = gql`
  query getTasks($status: Int) {
    getTasks(filter: { status: $status }) {
      id
      title
      description
      defaultCoins
      coins
      active
      status
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
      coins
      active
      status
    }
  }
`;
