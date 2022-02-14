import { Fragment, Component } from "react";
import FormLogin from "./FormLogin";
import { Navigate } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        vlogin: false,
    };
  }

  handleSubmit = (values) => {
    if(values.username === 'admin' && values.password === '123456') {
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
                    onSubmit={this.handleSubmit}
                />
            </Fragment>
        );
    }
  }
}