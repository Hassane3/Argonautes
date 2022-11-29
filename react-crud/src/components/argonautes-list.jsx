import React from "react";
import { Component } from "react";
import ArgonautesDataService from "../services/argonautes.service";

export default class ArgonautesList extends Component {
  constructor(props) {
    super(props);

    this.getArgonautes = this.getArgonautes.bind(this);

    this.state = {
      argonautes: []
    };
  }

  componentDidMount() {
    this.getArgonautes();
  }

  getArgonautes() {
    ArgonautesDataService.getAll().then((response) => {
      console.log("ARGOS : ", response.data);
      this.setState({
        argonautes: response.data,
      });
      console.log("ARGOSOS: ", this.state.argonautes);
    });
  }

  render() {
    var tbody = document.querySelector("#body_membres")
    return (
      <div className="container">
        <h2>Membres de l'équipage</h2>
        <section className="member-list">
          <table id="table_membres">
            <tbody id="body_membres">
            </tbody>
          </table>
          {
            this.state.argonautes.map((membre) => {
              console.log("membre :", membre.nom);
              console.log("index:", this.state.argonautes.indexOf(membre))

              var td = document.createElement("td");
              var p = document.createElement("p");
              var index = this.state.argonautes.indexOf(membre);

              p.innerHTML = membre.nom;
              td.appendChild(p)

              // We create a new line (tr) when modulo of 3 (3 columns) = 0
              if (index % 3 === 0) {
                console.log("TRUE")
                var tr = document.createElement("tr");
                tbody.appendChild(tr)
              }
              tbody.lastChild.appendChild(td)
              return null
            })
          }
        </section>
      </div>
    );
  }
}
