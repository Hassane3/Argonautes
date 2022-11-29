import React from "react";
import { Component } from "react";
import ArgonautesDataService from "../services/argonautes.service"

export default class AddArgonaute extends React.Component {
    constructor(props) {
        super(props)
        this.addMember = this.addMember.bind(this)
        this.setMemberName = this.setMemberName.bind(this)
        this.state = {
            nom: ""
        }
    }

    addMember(event) {
        event.preventDefault()
        const memberObject = {
            nom: this.state.nom
        };

        ArgonautesDataService.postMember(memberObject).then((res) => {
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
        this.setState({ nom: '' })
    }

    setMemberName(event) {
        this.setState({ nom: event.target.value })
        console.log(this.state.nom)
    }


    render() {
        return (
            <div className="container">
                <h2>Ajouter un(e) Argonaute</h2>
                <form className="new-member-form" onSubmit={this.addMember}>
                    <label htmlFor="name">Nom de l&apos;Argonaute</label>
                    <input
                        id="memberName"
                        name="name"
                        type="text"
                        placeholder="Charalampos"
                        onChange={this.setMemberName}
                        value={this.state.nom}
                    />
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        )
    }
}