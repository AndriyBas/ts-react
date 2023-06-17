import * as React from "react";

const Events: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e);
  };
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };
  return (
    <div>
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default Events;
