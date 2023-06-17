import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SearchRepos,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names: string[] = data.objects.map((res: any) => res.package.name);
      dispatch({
        type: ActionType.SearchReposSuccess,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SearchReposError,
        payload: error.message,
      });
    }
  };
};
