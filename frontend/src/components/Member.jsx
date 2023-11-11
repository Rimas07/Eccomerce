// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

class MemberManagement extends Component {
  constructor() {
    super();
    this.state = {
      members: ["owner", "user1", "user2"],
      newMemberName: "",
      removeMemberName: "",
    };
  }

  // Function to add a member
  addMember = () => {
    const { newMemberName, members } = this.state;
    if (newMemberName && !members.includes(newMemberName)) {
      this.setState((prevState) => ({
        members: [...prevState.members, newMemberName],
        newMemberName: "",
      }));
    }
  };

  // Function to remove a member
  removeMember = () => {
    const { removeMemberName, members } = this.state;
    if (members.includes(removeMemberName)) {
      if (removeMemberName !== "owner") {
        this.setState((prevState) => ({
          members: prevState.members.filter(
            (member) => member !== removeMemberName
          ),
          removeMemberName: "",
        }));
      } else {
        alert("Cannot remove the owner.");
      }
    }
  };

  render() {
    return (
      <div>
        

        <h2>Members List</h2>
        <ul>
          {this.state.members.map((member) => (
            <li key={member}>{member}</li>
          ))}
        </ul>

        <h2>Add Member</h2>
        <input
          type="text"
          value={this.state.newMemberName}
          onChange={(e) => this.setState({ newMemberName: e.target.value })}
          placeholder="Username"
        />
        <button onClick={this.addMember}>Add Member</button>

        <h2>Remove Member</h2>
        <input
          type="text"
          value={this.state.removeMemberName}
          onChange={(e) => this.setState({ removeMemberName: e.target.value })}
          placeholder="Username"
        />
        <button onClick={this.removeMember}>Remove Member</button>
      </div>
    );
  }
}

export default MemberManagement;
