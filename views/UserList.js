import React, {useContext} from 'react'
import { View, Image, StyleSheet, Alert } from 'react-native'
import { ListItem, Button } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import UsersContext from '../context/UserContext'
import users from '../data/users'

export default props => {

    const { state, dispatch } = useContext(UsersContext)


    function confirmDeleteUser(user){
        Alert.alert('Excluir Contato', 'Este contato será removido da lista, deseja continuar?',[
            {
                text: 'Excluir',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Cancelar',
            }
        ])
    }

    function getActions(user){
        return(
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Image style={styles.tinyIcon} source={require('../img/edit.png')}/>}
                />
                <Button
                    onPress={() => confirmDeleteUser(user)}
                    type="clear"
                    icon={<Image style={styles.tinyIcon} source={require('../img/delete.png')}/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                style={styles.card}
                leftAvatar={{source: {}}}
                key={user.id}
                title={user.name}
                subtitle={user.phone}
                rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm', user)}
            />

        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tinyIcon: {
        width: 30,
        height: 30,
    },
    card: {
        backgroundColor: 'blue',
        margin: 5,
        borderRadius: 20,
        

    }
})