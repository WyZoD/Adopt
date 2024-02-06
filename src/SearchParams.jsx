import React from "react";
const SearchParams = () => {
  const [location, setLocation] = React.useState(""); //hook
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;

//called really often. Every action.
