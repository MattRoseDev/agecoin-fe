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
  // Theme
  ToggleTheme = "TOGGLE_THEME"
}
