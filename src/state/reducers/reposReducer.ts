import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ReposState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: ReposState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: ReposState = initialState,
  action: Action
): ReposState => {
  switch (action.type) {
    case ActionType.SearchRepos:
      return { loading: true, error: null, data: [] };
    case ActionType.SearchReposSuccess:
      return { loading: false, error: null, data: action.payload as string[] };
    case ActionType.SearchReposError:
      return { loading: false, data: [], error: action.payload as string };
    default:
      return state;
  }
};

export default reducer;
