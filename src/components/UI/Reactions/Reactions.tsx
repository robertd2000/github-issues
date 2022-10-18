import { FC } from "react";
import { IReaction } from "../../../types";
import { reactions as reacts } from "../../../utils/constants";
import { count } from "../../../utils/helpers";
import { ReactionIcon } from "../Icons/Reaction";

interface IProps {
  reactions: IReaction[];
  onHandler: (v: string) => void;
}

export const Reactions: FC<IProps> = ({ reactions, onHandler }) => {
  const counReact = count(reactions);

  return (
    <div className="m-3 mt-1">
      {reactions && reactions.length > 0 && (
        <>
          <ReactionIcon />
          {Object.entries(counReact)?.map(([r, c]) => (
            <button
              className="btn btn-outline-info m-2"
              key={r}
              onClick={() => onHandler(r)}
            >
              {reacts[r]} {c}
            </button>
          ))}
        </>
      )}
    </div>
  );
};
