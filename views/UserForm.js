import React, { useContext, useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import UsersContext from '../context/UserContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})

    const { dispatch } = useContext(UsersContext)

    return(
        <View style={style.form}>
            <Text style={style.text}>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText = {name => setUser({...user, name})}
                value={user.name}
            />
            <Text style={style.text}>Telefone</Text>
            <TextInput
                style={style.input}
                onChangeText = {phone => setUser({...user, phone})}
                value={user.phone}
            />
            <Text style={style.text}>E-mail</Text>
            <TextInput
                style={style.input}
                onChangeText = {email => setUser({...user, email})}
                value={user.email}
            />
            <Button 
                style={{marginTop: 10, backgroundColor: '#7F72F5'}}
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        width: 350,
        height: 30,
        borderColor: '#B5B4B4',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white', 
    },
    text: {
        margin: 5,
        color: '#807C7C', 
    },
    form: {
        padding: 5,
    }
})