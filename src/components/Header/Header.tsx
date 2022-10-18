import { memo } from "react";
import Filter from "./Filter";
import Sort from "./Sort";
import NewIssueButton from "../UI/NewIssueButton";

const Header = () => {
  return (
    <div className="input-group mb-3 row">
      <Filter />
      <Sort />
      <NewIssueButton />
    </div>
  );
};

export default memo(Header);
