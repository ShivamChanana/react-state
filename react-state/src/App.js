import React from "react"
import ListContacts from "./ListContacts"
import PropTypes from "prop-types"
import Counter from "./Counter"

// import List from "./list"
// import Number from "./number"

// const friends = ["tom", "plant", "smacky", "shivam"]

// function getFriends(){
//     return friends[Math.floor(Math.random() * friends.length)]
// }


// function getNumber(){
//   return Math.floor(Math.random() * 10 + 1)
// }

class App extends React.Component{
  state = {
    toggle: false,
    count: 0,
    contacts : [
      {
        id: '1',
        name: 'afzal',
        handle: '@afzal',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '2',
        name: 'tom',
        handle: '@tom',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '3',
        name: 'Richard',
        handle: '@richard',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      }
    ]
  }
  handleClick = ()=>{
    console.log("u called")
    this.setState({
      toggle: !this.state.toggle
    })
  }
  //increment count
  //set state is asynchronous in nature
    incrementCount = ()=>{
      console.log("up", this.state.count)
      this.setState((prevState)=>({
        count : prevState.count + 1
      }))
      this.setState((prevState)=>({
        count : prevState.count + 1
      }))
      this.setState((prevState)=>({
        count : prevState.count + 1
      }))
      console.log("down", this.state.count)
    }
    


    decrementCount = ()=>{
      this.setState({
        count: this.state.count - 1
      })
    }
    resetCount=()=>{
      this.setState({
        count: 0
      })
    }

    //removeContact
    removeContact = (contact)=>{
      console.log ("inside remove contact", contact)
      this.setState({
        contacts: this.state.contacts.filter((c)=> (c.id !== contact.id))  
      })
    }

    render(){
      return(
        <div>
          <ListContacts 
          contacts = {this.state.contacts}
          removeContact = {this.removeContact}
          />
        </div>
      )
    }
  }
  export default App

    // render(){
    
      //   return(
      //     <div>
      //       <h1>Hello React</h1>
      //   <h1>{this.state.toggle? "Hello User": "You Are not signed in"}</h1>
      //   <hr/>
      //       <button onClick= {this.handleClick}>Toggle</button>
      //       <br/>
      //       {this.state.toggle && "hello"}
      //       <br/>
      //     <Counter 
      //     count= {this.state.count}
      //     incrementCount = {this.incrementCount}
      //     decrementCount = {this.decrementCount}
      //     resetCount = {this.resetCount}
      //     />
      //     </div>
      //   )
      // }
      // }



