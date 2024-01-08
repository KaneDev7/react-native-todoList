import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { windowWidth } from '../style/style';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RenderItem({ todo, toogleTodo, deleteTodo, filterSelected }) {

    return (
        <View style={styles.listItem} >
            <View style={styles.todoText}>
                <View style={styles.flex} >
                    { !todo.completed ? 
                        
                            <AntDesign
                                name="circledowno"
                                size={20}
                                color="#54aeff"
                                onPress={() => toogleTodo(todo.id)}
                            />:
                            <AntDesign
                                name="circledown"
                                size={20}
                                color="#54aeff"
                                onPress={() => toogleTodo(todo.id)}
                            />
                    }
                   
                </View>
                <View>

                    <View>
                        <Text
                            style={{
                                marginLeft: 10,
                                fontSize: 17,
                                color: '#000000c4',
                                textDecorationLine: todo?.completed ? 'line-through' : 'none'
                            }} >
                            {todo?.title}
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 13,
                            marginLeft: 10,
                            marginTop: 5,
                            color: '#00000087'
                        }} >
                            {todo?.date}
                        </Text>
                    </View>
                </View>

            </View>

            <View style={styles.button} >

                <MaterialCommunityIcons
                    name="delete"
                    size={20}
                    color="#fe1919c4"
                    onPress={() => deleteTodo(todo.id)}
                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
    },

    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        margin: 5,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    },

    todoText: {
        flex: 1,
        width: windowWidth,
        display: 'flex',
        flexDirection: 'row',
    },

    deleteBtn: {
        backgroundColor: 'red',
        padding: 7,
        marginLeft: 10,
    },

    deleBtnText: {
        color: '#fff',
    },

    button: {
        paddingLeft: 30
    }
});

