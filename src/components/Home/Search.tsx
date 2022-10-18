import { ChangeEvent, FC, memo } from "react";

interface IProps {
  searchTerm: {
    name: string;
    owner: string;
  };
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<IProps> = ({ searchTerm: { name, owner }, handleSearch }) => {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleSearch}
          className="form-control fs-4"
          aria-label="Text input with checkbox"
        />
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          name="owner"
          value={owner}
          onChange={handleSearch}
          className="form-control fs-4"
          aria-label="Text input with radio button"
        />
      </div>
    </div>
  );
};

export default memo(Search);
