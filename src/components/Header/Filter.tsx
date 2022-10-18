import { memo } from "react";
import { useActions } from "../../hooks/useActions";
import { filterValues } from "../../utils/constants";

const Filter = () => {
  const { setFilter } = useActions();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className="col">
      <select
        onChange={handleSelect}
        className="form-select  fs-4"
        aria-label="Default select example"
        defaultValue={"Filters"}
      >
        <option disabled value="Filters">
          Filters
        </option>
        {Object.entries(filterValues).map(([name, value]) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Filter);
