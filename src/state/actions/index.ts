import { ActionType } from "../action-types";

interface SearchReposAction {
  type: ActionType.SearchRepos;
}

interface SearchReposSuccessAction {
  type: ActionType.SearchReposSuccess;
  payload: string[];
}

interface SearchReposErrorAction {
  type: ActionType.SearchReposError;
  payload: string;
}

export type Action =
  | SearchReposAction
  | SearchReposSuccessAction
  | SearchReposErrorAction;
