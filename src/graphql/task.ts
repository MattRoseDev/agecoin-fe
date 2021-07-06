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
  mutation startTask($taskId: ID!) {
    startTask(taskId: $taskId) {
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

export const PAUSE_TASK = gql`
  mutation pauseTask($taskId: ID!) {
    pauseTask(taskId: $taskId) {
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

export const FINISH_TASK = gql`
  mutation finishTask($taskId: ID!, $coins: Int) {
    finishTask(taskId: $taskId, input: { coins: $coins }) {
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

export const ARCHIVE_TASK = gql`
  mutation archiveTask($taskId: ID!) {
    archiveTask(taskId: $taskId) {
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
