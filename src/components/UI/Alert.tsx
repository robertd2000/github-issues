import { FC, memo } from "react";

const Alert: FC<{ message: string }> = ({ message }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
};

export default memo(Alert);
