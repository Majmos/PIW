import { Component } from "react";
import Group from "./Group";

export default class SearchGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: "name",
      searchText: ""
    };
  }
  handleSearchByChange = (e) => {
    this.setState({
      searchBy: e.target.value,
    });
  };
  handleSearchTextChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Grupy:</h1>
          <input type="search" onChange={this.handleSearchTextChange} />
          <select value={this.searchBy} onChange={this.handleSearchByChange}>
            <option value="name">Nazwa</option>
            <option value="description">Opis</option>
            <option value="members">Członkowie</option>
            <option value="subject">Przedmiot</option>
          </select>
          <ul className="groups-list">
            {this.props.groups.filter(group => {
              if (this.state.searchBy !== "members") {
                return group[this.state.searchBy].toLowerCase().includes(this.state.searchText.toLowerCase());
              } else {
                return group[this.state.searchBy].find(element => element.name.toLowerCase().includes(this.state.searchText.toLowerCase()));
              }
            }).map((g, i) => <li key={i} className="group"><Group group={g} /></li>)}
          </ul>
        </div>
      </>
    );
  }
}
