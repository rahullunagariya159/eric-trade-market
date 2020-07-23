import React, { Component } from "react";
import SocialHeader from "./Header";
import Content from "./content";

export default class Social extends Component {
  render() {
    return (
      <div>
        <SocialHeader />
        <Content />
      </div>
    );
  }
}
