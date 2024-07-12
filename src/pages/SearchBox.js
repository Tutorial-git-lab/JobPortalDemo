import React from "react";

export default function SearchBox() {
  return (
    <>
      <div className="container-fluid ">
        <div className="contianer my-3">
          <div className="container row my-3">
            <div class="input-group">
              <img
                src="https://static.naukimg.com/s/7/103/i/search.57b43584.svg"
                alt="searchIcon"
              />
              <input
                class="form-control me-2"
                type="search"
                placeholder="Enter companies"
                aria-label="Search"
              />
              <select className="col-3  me-2" aria-label="Search">
                <option value="0">Select exprience</option>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
              </select>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Enter location"
                aria-label="Search"
              />

              <button type="button" class="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
