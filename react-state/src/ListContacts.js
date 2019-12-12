import React from "react"
import PropTypes from "prop-types"

class ListContacts extends React.Component{

    state = {
        query: ""
    }

    updateQuery = input =>{
        console.log(input)
        this.setState({
            query: input.trim()
        })
    }

    render(){
        const showContacts = this.state.query === ""
                                                ?this.props.contacts
                                                :this.props.contacts.filter((contact)=>contact.name.toLowerCase().includes(this.state.query.toLowerCase()))

        return(
<div>
    <input placeholder = "search here"
    value = {this.state.query}
    onChange = {(e)=>this.updateQuery(e.target.value)}
    />
        <h1>Contacts</h1>
        <div>
    <h2>Showing {showContacts.length} of {this.props.contacts.length} results</h2>
        </div>
        {showContacts.map((list)=>(
            <li key = {list.id}>
                {list.name}
                <button onClick = {()=> this.props.removeContact(list)}>Remove</button>
            </li>
        ))}
    </div>
        )
    }
}


ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    removeContact: PropTypes.func.isRequired
}


export default ListContacts