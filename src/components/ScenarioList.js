import React, { Component } from "react";
import ScenarioCard from "./ScenarioCard";
import { Link } from "@reach/router";
import * as api from "./utils/api";

class ScenarioList extends Component {
  state = {
    scenarios: [
      {
        name: "",
        slug: "",
        creator_id: 1,
        color_scheme: ["#561D25", "#CE8147", "#ECDD7B", "#D3E298", "#CDE7BE"],
        is_public: null,
        likes: 0,
        sounds: []
      }
    ]
  };

  componentDidMount() {
    const fetchedScenarios = api.getAllScenarios();
    this.setState({ scenarios: fetchedScenarios });
  }

  render() {
    const { scenarios } = this.state;
    const styling = {
      padding: "0px",
      backgroundColor: "#D3E298",
      listStyle: "none"
    };
    return (
      <ul style={styling}>
        {scenarios.map(scenario => {
          const { slug } = scenario;
          return (
            <Link to={`/scenarios/${slug}`} key={slug}>
              <ScenarioCard scenario={scenario} />
            </Link>
          );
        })}
      </ul>
    );
  }
}

export default ScenarioList;
