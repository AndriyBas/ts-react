import * as React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      <div>Hey from child</div>
      <p>{color}</p>
      <button onClick={onClick}></button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      <div>Hey from child</div>
      <p>{color}</p>
      <button onClick={onClick}></button>
    </div>
  );
};

ChildAsFC.displayName = "ChildAsFC";
