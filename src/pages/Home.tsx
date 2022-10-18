import { memo } from "react";
import { useSearch } from "../hooks/useSearch";
import { Search, IssuesList } from "../components/Home";
import Header from "../components/Header/Header";
import Spinner from "../components/UI/Spinner";
import Alert from "../components/UI/Alert";

const Home = () => {
  const { data, loading, error, handleSearch, searchTerm } = useSearch();

  return (
    <div className="container">
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <hr />
      {loading && <Spinner />}
      {!loading && error && <Alert message={error.message} />}
      <Header />
      <IssuesList data={data} loading={loading} error={error} />
    </div>
  );
};

export default memo(Home);
