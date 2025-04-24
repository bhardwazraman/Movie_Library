import React, { useEffect, useState } from "react";
import useFetch from "../Comman/useFetch";
import MovieItem from "../Components/MovieItem";
const Home = () => {
  const { data, loading, error } = useFetch(
    "https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies"
  );
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setFilteredData(data);
    }
  }, [data]);
  const handleFilterData = () => {
    let modifiedData = data.filter((item) =>
      item.primaryTitle.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(modifiedData);
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <h1> Loading...</h1>
      </div>
    );
  }
  if (error && error.message) {
    return <div>{error.message}</div>;
  }
  return (
    <div style={styles.container}>
      <h1> Movie Search page</h1>
      <div style={styles.formWrapper}>
        <input
          style={styles.inputStyle}
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleFilterData}>Search</button>
      </div>
      <ul style={styles.listWrapper}>
        {filteredData.map((data) => (
          <MovieItem key={data.id} item={data} />
        ))}
      </ul>
    </div>
  );
};
export default Home;
const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 20,
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: { display: "flex", flexDirection: "row" },
  inputStyle: { marginRight: 10 },
  listWrapper: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    listStyleType: "none",
    padding: 0,
    margin: 0,
    marginTop: 20,
  },
};
