import { Component } from "react";

export default class Group extends Component {
  render() {
    return (
      <>
        <div>
          <div>
            <h2>Nazwa:</h2>
            {this.props.group.name}
          </div>
          <div>
            <h2>Opis:</h2>
            {this.props.group.description}
          </div>
          <div>
            <h2>Członkowie:</h2>
            <ul className="members">
              {this.props.group.members.map((member, i) => <li key={i} className="member">{member.name}</li>)}
            </ul>
          </div>
          <div>
            <h2>Subject:</h2>
            {this.props.group.subject}
          </div>
        </div>
      </>
    );
  }
}
