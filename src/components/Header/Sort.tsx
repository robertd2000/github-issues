import { memo } from "react";
import { useActions } from "../../hooks/useActions";
import { sortValues } from "../../utils/constants";
import { getNameFromSortString } from "../../utils/helpers";

const Sort = () => {
  const { setSortBy } = useActions();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="col-3">
      <select
        onChange={handleSelect}
        className="form-select fs-4"
        aria-label="Default select example"
        defaultValue={"Sort"}
      >
        <option value={"Sort"} disabled>
          Sort by
        </option>
        {Object.values(sortValues).map((value) => (
          <option key={value} value={value}>
            {getNameFromSortString(value)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Sort);
