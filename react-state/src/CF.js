import React,{Component} from "react"

//react way of forms
//normal forms - input, name,submit, select the form, select the fields, grab the value - submit the form
//React suggests - to have all the fields in the state
//input fields - data of the input field should be in the state
//

class CF extends Component{
    state = {
        name : "",
        handle: "",
        avatarURL:""
    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        console.log("In submit", this.state)
           this.props.addContact(this.state)
       
    }

    render(){
        const {name, handle, avatarURL}= this.state
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input placeholder = "enter the name"
                        name = "name"
                        value = {name}
                        onChange = {this.handleChange}
                        />
                        <input placeholder = "enter the handle"
                        name = "handle"
                        value = {handle}
                        onChange = {this.handleChange}
                        />
                        <input placeholder = "enter the avatar"
                        name = "avatarURL"
                        value = {avatarURL}
                        onChange = {this.handleChange}
                        />
                        <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default CF