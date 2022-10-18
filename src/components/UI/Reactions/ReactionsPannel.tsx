import { FC } from "react";
import { ReactionIcon } from "../Icons";
import { reactions } from "../../../utils/constants";

export const ReactionsPannel: FC<{ onHandler: (v: string) => void }> = ({
  onHandler
}) => {
  return (
    <div className="mt-3 text-end position-absolute top-0 end-0">
      <button
        type="button"
        className="btn"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <ReactionIcon />
      </button>

      <ul className="dropdown-menu">
        {Object.entries(reactions).map((r) => (
          <button className="btn" onClick={() => onHandler(r[0])} key={r[0]}>
            {r[1]}
          </button>
        ))}
      </ul>
    </div>
  );
};
