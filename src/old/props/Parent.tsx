import { Child } from "./Child";
import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <>
      <Child color="red" onClick={() => console.log("clicked")}>
        Some content
      </Child>
      <ChildAsFC color="red" onClick={() => console.log("clicked")}>
        Some content
      </ChildAsFC>
    </>
  );
};

export default Parent;
