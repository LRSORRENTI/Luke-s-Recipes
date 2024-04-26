import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "../../redux/store/recipesSlice";
import { fetchSearchRecipe } from "../../redux/utils/recipeUtils";

const Searchbar = () => {
  const [error, setError] = useState("");
  const [queryText, setQueryText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (queryText.trim().length > 0) {
      dispatch(setSearchQuery(queryText)); // Update the query first
      dispatch(fetchSearchRecipe(queryText)); // Now fetch based on the updated query
      setQueryText("");
      navigate("/recipes/search");
    } else {
      setError("Please enter search term.");
    }
  };
  

  const handleChange = (event) => {
    setQueryText(event.target.value);
    if (event.target.value.length === 0) {
      setError("Please enter search term.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="query"
        name="query"
        onChange={handleChange}
        placeholder="Search recipe here ..."
        value = {queryText}
      />
      <button type="submit" className="search-btn">
        <BsSearch className="text-red-500" size={20} />
      </button>
      { error && <span className="error-message">{error}</span>}
    </form>
  );
};

export default Searchbar;
