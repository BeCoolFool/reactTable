import React, { Component, Fragment } from "react";
import ReactPaginate from "react-paginate";
import style from "./App.module.css";
import Loader from "./Loader/Loader";
import Table from "./components/Table";
import DetailInfo from "./components/DetailInfo/DetailInfo";
import makeSort from "./functions/makeSort";
import chunkArray from "./functions/chunkArray";
import ModeSelect from "./components/ModeSelect/ModeSelect";
import Search from "./components/Search/Search";

class App extends Component {
  state = {
    isModeSelected: false,
    isLoading: false,
    pureData: [],
    data: [],
    info: null,
    sortBy: "none",
    sortField: "none",
    currentPage: 0,
    search: ""
  };

  async getDataFrom(url) {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      isLoading: false,
      pureData: data,
      data
    });
  }

  onPersonSelect = info => {
    this.setState({ info });
  };

  onTableSort = columnName => {
    const clonedData = this.state.data.concat();
    const sortType =
      this.state.sortBy === "none"
        ? "ascending"
        : this.state.sortBy === "ascending"
        ? "decreasing"
        : "none";
    const sortedData = makeSort(
      clonedData,
      sortType,
      columnName,
      this.state.pureData
    );
    this.setState({
      data: sortedData,
      sortBy: sortType,
      sortField: columnName
    });
  };

  onModeSelect = url => {
    this.setState({
      isModeSelected: true,
      isLoading: true
    });
    this.getDataFrom(url);
  };

  pageChangeHandler = ({ selected }) => {
    this.setState({
      currentPage: selected
    });
  };

  getFilteredData = () => {
    if (!this.state.search) {
      return this.state.data;
    }

    return this.state.data.filter(item => {
      return (
        item["firstName"]
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        item["lastName"]
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        item["email"].toLowerCase().includes(this.state.search.toLowerCase())
      );
    });
  };

  searchHandler = search => {
    this.setState({
      search,
      currentPage: 0
    });
  };

  render() {
    const paginationSize = 50;
    const filteredData = this.getFilteredData();
    const displayData = chunkArray(filteredData, paginationSize)[
      this.state.currentPage
    ];
    const pageCount = Math.ceil(filteredData.length / paginationSize);

    if (!this.state.isModeSelected) {
      return <ModeSelect selectData={this.onModeSelect} />;
    }

    return (
      <div className={style.wrapper}>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Fragment>
            <Search onSearch={this.searchHandler} />
            <Table
              data={displayData}
              onPersonSelect={this.onPersonSelect}
              onTableSort={this.onTableSort}
              sortBy={this.state.sortBy}
              sortField={this.state.sortField}
            />
          </Fragment>
        )}
        {this.state.info ? <DetailInfo person={this.state.info} /> : null}
        {this.state.data.length > paginationSize ? (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.pageChangeHandler}
            containerClassName={style.pagination}
            activeClassName={style.active}
            forcePage={this.state.currentPage}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
