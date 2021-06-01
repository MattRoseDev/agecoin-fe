type NewTaskForm = {
  title: string;
  defaultAmount: number;
  description?: string;
};

export default () => {
  const addTask = (values: NewTaskForm) => {
    // TODO: addTask graphql API
  };

  return {
    addTask
  };
};
