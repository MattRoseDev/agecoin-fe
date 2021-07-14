export enum MutationType {
  SetUser = "SET_USER",
  ClearUser = "CLEAR_USER",
  SetToken = "SET_TOKEN",
  ClearToken = "CLEAR_TOKEN",
  SetIsAuthenticated = "SET_IS_AUTHENTICATED",
  // Tasks
  SetTasks = "SET_TASKS",
  AppendNewTask = "APPEND_NEW_TASK",
  EditTask = "EDIT_TASK",
  DeleteTask = "DELETE_TASK",
  StartTask = "START_TASK",
  PauseTask = "PAUSE_TASK",
  FinishTask = "FINISH_TASK",
  ArchiveTask = "ARCHIVE_TASK",
  UpdateTask = "UPDATE_TASK",
  // Daily Coins
  SetDailyCoins = "SET_DAILY_COINS",
  // Active Task
  SetActiveTask = "SET_ACTIVE_TASK",
  SetActiveTaskById = "SET_ACTIVE_TASK_BY_ID",
  ClearActiveTaskById = "CLEAR_ACTIVE_TASK_BY_ID",
  // Theme
  ToggleTheme = "TOGGLE_THEME"
}
