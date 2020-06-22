import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions'

class EmployeeForm extends Component {
    render() {
        return(
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={name => this.props.employeeUpdate({prop: 'name', value: name })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone Number"
                        placeholder="+555 9875879550"
                        value={this.props.phone}
                        onChangeText={phone => this.props.employeeUpdate({ prop: 'phone', value: phone })}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                        style={{flex: 1}}
                    >
                        <Picker.Item label="Sunday"  value="sun"/>
                        <Picker.Item label="Monday"  value="mon"/>
                        <Picker.Item label="Tuesday"  value="tue"/>
                        <Picker.Item label="Wednesday"  value="wed"/>
                        <Picker.Item label="Thursday"  value="thu"/>
                        <Picker.Item label="Friday"  value="fri"/>
                        <Picker.Item label="Saturday"  value="sat"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles={
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        alignSelf: 'center'
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);