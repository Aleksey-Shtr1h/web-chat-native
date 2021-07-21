export const ActionTypeTemplate = {
  TEST: `TEST`,
};

export const ActionCreatorTemplate = {
  getTemplate: (number) => ({
    type: ActionTypeTemplate.TEST,
    payload: number + 1,
  }),
};
