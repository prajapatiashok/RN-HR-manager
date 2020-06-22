import _ from 'lodash';
import React, { Component } from 'react';
import  ListItem  from './ListItem';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentDidMount() {
        this.props.employeesFetch()
    }

    render() {
        return(
            <FlatList 
                data={this.props.employees}
                keyExtractor={(item,index) => { return index.toString(); }}
                renderItem={({item}) => {
                    return (
                        <ListItem employee={item} />
                    );
                }}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees  = _.map(state.employees.employees, ( val, uid ) => {
        return { ...val, uid };
    })

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);