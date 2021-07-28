export const initialState = {
  loans: [],
};

export const actions = Object.freeze({
  GET_LOANS: 'GET_LOANS',
  FORM_CLEAR: 'FORM_CLEAR',
});

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.GET_LOANS:
      return {
        ...state,
        loans: action.payload.loans,
      };
    case 'setUser':
      return { user: action.payload };
    default:
      return state;
  }
};
