import React from "react"
import PropTypes from "prop-types"

class ListContacts extends React.Component{

    state = {
        query: ""
    }

    updateQuery = (input) =>{
        console.log(input)
        this.setState({
            query: input.trim()
        })
    }

    render(){
        const {query} = this.state
        const {contacts, removeContact} = this.props
        const showContacts = query === ""
                                                ?contacts
                                                :contacts.filter((contact)=>contact.name.toLowerCase().includes(query.toLowerCase()))

        return(
<div>
    <input placeholder = "search here"
    value = {query}
    onChange = {(e)=>this.updateQuery(e.target.value)}
    />
        <h1>Contacts</h1>
        {query !== "" &&
        <div>
    <h2>Showing {showContacts.length} of {contacts.length} results</h2>
        </div>}
        {showContacts.map((list)=>(
            <li key = {list.id}>
                {list.name}
                <button onClick = {()=> removeContact(list)}>Remove</button>
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