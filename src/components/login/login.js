import { Fragment, Component } from "react";
import FormLogin from "./FormLogin";
import { supabase } from '../../supabaseClient'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
    };
  }

  changeEmail = (event) => {
    console.log('cek email di handle change', event.target.value);
    this.setState({
      email: event.target.value,
    });
  };

  handleSubmit = async () => {
    const email = this.state.email
    console.log('cek email', email);
    try {
      const { error } = await supabase.auth.signIn({ email })
      if (error) {
        throw error
      } else {
        alert('Check your email for the login link!')
      }
    } catch (error) {
      alert(error.error_description || error.message)
    }
  };

  render() {

    return (
      <Fragment>
          <FormLogin
              changeEmail={this.changeEmail}
              onSubmit={this.handleSubmit}
          />
      </Fragment>
    );
    
  }
}