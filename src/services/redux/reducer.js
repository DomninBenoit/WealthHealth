import { createStore } from "redux";
import produce from "immer";

const initialState = {
  employes: [],
};

function reducer(state = initialState, action) {
  if (action.type === "ADD_EMPLOYES") {
    return produce(state, (draft) => {
      draft.employes.push(action.payload);
    });
  }
}

export const store = createStore(reducer);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
