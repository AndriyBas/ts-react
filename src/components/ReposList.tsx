import * as React from "react";
import { useSelector } from "../hooks/useTypedSelector";
// import { store, actionCreators } from "../state";
import { useActions } from "../hooks/useActions";

const ReposList: React.FC = () => {
  const [term, setTerm] = React.useState("");
  const actions = useActions();
  const { data, error, loading } = useSelector((state) => state.repos);
  // console.log(state);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.searchRepos(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {error && <h3>Error: {error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <ol>
          {data.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default ReposList;
