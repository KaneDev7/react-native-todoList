import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { CheckBox, } from "react-native-btr";
import { windowWidth } from '../style/style';


export default function ListItem({ todo, toogleTodo, deleteTodo, filterSelected }) {
    console.log('filterSelected', filterSelected)
    if (filterSelected === 'completed' && todo.completed) {
        return (
            <View style={styles.listItem} >
                <View style={styles.todoTextt} >
                    <View style={styles.flex} >
                        <CheckBox
                            checked={todo.completed}
                            onPress={() => toogleTodo(todo.id)}
                        />
                    </View>
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 18,
                            textDecorationLine: todo.completed ? 'line-through' : 'none'
                        }} >
                        {todo.title}
                    </Text>
                </View>
                <Button
                    style={styles.button}
                    title='Delete'
                    color='red'
                    onPress={() => deleteTodo(todo.id)}
                />
            </View>
        )
    } else if (filterSelected === 'pendding' && !todo.completed) {
        return (
            <View style={styles.listItem} >
                <View style={styles.todoTextt} >
                    <View style={styles.flex} >
                        <CheckBox
                            checked={todo.completed}
                            onPress={() => toogleTodo(todo.id)}
                        />
                    </View>
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 18,
                            textDecorationLine: todo.completed ? 'line-through' : 'none'
                        }} >
                        {todo.title}
                    </Text>
                </View>
                <Button
                    style={styles.button}
                    title='Delete'
                    color='red'
                    onPress={() => deleteTodo(todo.id)}
                />
            </View>
        )
    } else if (filterSelected === 'all') {
        return (
            <View style={styles.listItem} >
                <View style={styles.todoTextt} >
                    <View style={styles.flex} >
                        <CheckBox
                            checked={todo.completed}
                            onPress={() => toogleTodo(todo.id)}
                        />
                    </View>
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 18,
                            textDecorationLine: todo.completed ? 'line-through' : 'none'
                        }} >
                        {todo.title}
                    </Text>
                </View>
                <Button
                    style={styles.button}
                    title='Delete'
                    color='red'
                    onPress={() => deleteTodo(todo.id)}
                />
            </View>
        )
    }


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
        backgroundColor: '#eee',
        padding: 5,

    },
    todoTextt: {
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
    }


});