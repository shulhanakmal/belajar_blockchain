import { Fragment, Component } from "react";
import FormLogin from "./FormLogin";
import { Navigate } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        vlogin: false,
        username: '',
        password: '',
    };
  }

  changeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  changePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = () => {
    if(this.state.username === 'admin' && this.state.password === '123456') {
        this.setState({
            vlogin: true,
        });
    }
  };

  render() {

    if(this.state.vlogin) {
        return <Navigate to="/HalamanDua" replace={true} />
    } else {
        return (
            <Fragment>
                <FormLogin
                    changeUsername={this.changeUsername}
                    changePassword={this.changePassword}
                    onSubmit={this.handleSubmit}
                />
            </Fragment>
        );
    }
  }
}