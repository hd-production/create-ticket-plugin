import React from "react";
import axios from "axios";

const TICKETS_URL = 'http://' + process.env.REACT_APP_TICKETS_HOST + '/tickets';

class TicketForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            issuerEmail: '',
            issue: '',
            details: ''
        }
    }

    handleEmailChange = (event) => {
        this.setState({issuerEmail: event.target.value});
    };

    handleIssueChange = (event) => {
        this.setState({issue: event.target.value});
    };

    handleDetailsChange = (event) => {
        this.setState({details: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(TICKETS_URL);
        axios.post(TICKETS_URL, this.state);
        //ToDo: error handling
    };

    render() {
        return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <input type="email" placeholder="Email" value={this.state.issuerEmail} onChange={this.handleEmailChange}/>
                  <input type="text" placeholder="Issue" value={this.state.issue} onChange={this.handleIssueChange}/>
                  <textarea onChange={this.handleDetailsChange} value={this.state.details}/>
                  <input type="submit" value="Submit"/>
              </form>
          </div>
        );
    }
}

export default TicketForm;
