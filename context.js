import React,{Component} from 'react';
import * as firebase from 'firebase';

const UserContext = React.createContext();
// Provider, Consumer

export class UserProvider extends Component {
  state = {
    user: {},
    dispatch : () => {
        console.log('Deneme')
    }
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(auth => {
        if (auth) {
            firebase.database().ref('users').child(auth.uid).on('value', (snap) => {
                this.setState({user:snap.val()})
            })
        }
    });
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;