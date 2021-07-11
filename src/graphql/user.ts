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

export const GET_DAILY_COINS = gql`
  query getDailyCoins($timezoneOffset: Int!) {
    getDailyCoins(input: { timezoneOffset: $timezoneOffset }) {
      remainingCoins
      savedCoins
      wastedCoins
      activeTask {
        id
        coins
      }
    }
  }
`;
