import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communication from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { CardSection, Card, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeEdit extends Component {

    state = { showModal: false }

    componentDidMount() {
        _.each(this.props.employee, ( value, prop ) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { phone, name, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communication.textWithoutEncoding(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        const { uid } = this.props.employee;

        this.props.employeeDelete({uid});
        this.setState({showModal: false})
    }

    onDecline() {
        this.setState({showModal: false})
    }

    render() {
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps= state => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name, phone, shift
    };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
