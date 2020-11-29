import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserList from '../views/UserList'
import UserForm from '../views/UserForm'
import { Button, Icon, StyleSheet } from 'react-native-elements'
import { UsersProvider } from '../context/UserContext'

const Stack = createStackNavigator()

export default props => {
    return(
        <UsersProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screenOptions}>
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={( {navigation}) => {
                        return {
                            title: "Lista de contatos",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("UserForm")}
                                    type="clear"
                                    icon={<Icon name="add" size={30} color="white"
                                    style={{marginTop: 30}} />}
                                    
                                />
                            )
                        }
                    }}

                />
                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={() => {
                        return {
                            title: "Cadastro contato"
                        }
                    }}

                />
            </Stack.Navigator>
        </NavigationContainer>
        </UsersProvider>
    )
}

const screenOptions = {
    headerStyle:{
        backgroundColor: '#7F72F5',
        height: 60,
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
        marginTop: 33,
        fontSize: 18, 
    },
    bodyStyle:{
        backgroundColor: '#F1F1F1'
    }
}
