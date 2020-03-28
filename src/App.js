import React, { Component, Fragment } from "react";
import ReactPaginate from "react-paginate";
import style from "./App.module.css";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";
import DetailInfo from "./components/DetailInfo/DetailInfo";
import makeSort from "./functions/makeSort";
import chunkArray from "./functions/chunkArray";
import ModeSelect from "./components/ModeSelect/ModeSelect";
import Search from "./components/Search/Search";
import AddPerson from "./components/AddPerson/AddPerson";

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
    fetch(url)
    .then(data => data.json())
    .then(data => {
      this.setState({
        isLoading: false,
        pureData: data,
        data
      });
    })
    .catch(err => console.log(err));
    
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

    const searchData = this.state.data.filter(item => {
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

    return searchData.length !== 0 ? searchData : this.state.pureData;
  };

  searchHandler = search => {
    this.setState({
      search,
      currentPage: 0
    });
  };

  addToTable = (id, firstName, lastName, email, phone) => {
    const newPerson = {
      id,
      firstName,
      lastName,
      email,
      phone
    };

    this.setState({
      data: [newPerson, ...this.state.data],
      pureData: [newPerson, ...this.state.pureData]
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
            <AddPerson addPerson={this.addToTable} />
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
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
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
