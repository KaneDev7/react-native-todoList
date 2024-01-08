import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, TextInput, Text, View, Button, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import Nav from '../components/Nav';
import { AsyncStorageService } from '../services/asynStorage';
import { windowWidth } from '../style/style';


const todosData = [
  {
    id: 1,
    title: 'bonjour',
    completed: true
  },
  {
    id: 2,
    title: 'bonsoird sssssssssss',
    completed: false
  }
]

export default function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])
  const [filterSelected, setFilterSelected] = useState('')

  const asyncStorage = new AsyncStorageService()

  const addTodo = async () => {
    if (text.trim() === '') {
      return
    }
    const newTodo = [
      ...todos,
      {
        id: todos[todos.length - 1]?.id + 1 || 1,
        title: text.trim(),
        completed: false,
        date : new Date().toLocaleDateString() + ' ' +  new Date().toLocaleTimeString()
      }
    ]
    setTodos(newTodo)
    setText('')
    await asyncStorage.saveTodos(newTodo)
  }

  const toogleTodo = async (id) => {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      } else {
        return todo
      }
    })
    setTodos(newTodo)
    await asyncStorage.saveTodos(newTodo)
  }

  const deleteTodo = async (id) => {
    const newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo)
    await asyncStorage.saveTodos(newTodo)
  }

  const filtreTodo = (filterText) => {
    setFilterSelected(filterText)
  }

  useEffect(() => {
    setFilterSelected('all')
  }, [])

  useEffect(() => {
    (async function () {
      const newTodo = await asyncStorage.loadTodos()
      setTodos(newTodo)
    }())
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title} >Liste de Taches</Text>

      <View style={styles.inputConainer} >
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder='Ajouter une nouvelle tache'
        />
        <Button onPress={addTodo} style={styles.button} title='Ajouter' />
        <View>
          <Text>
            {
              filterSelected === 'completed' ?
                todos.filter(item => item.completed).length + ` tache${todos.filter(item => item.completed).length > 1 ? 's' : ''}` :
                filterSelected === 'pendding' ?
                  todos.filter(item => !item.completed).length + ` tache${todos.filter(item => !item.completed).length > 1 ? 's' : ''}` :
                  todos.length + ` tache${todos.length > 1 ? 's' : ''}`
            }
          </Text>
        </View>
      </View>

      <Nav filtreTodo={filtreTodo} filterSelected={filterSelected} />

      <FlatList
        data={todos}
        renderItem={({ item }) => <ListItem
          filterSelected={filterSelected}
          todo={item}
          toogleTodo={toogleTodo}
          deleteTodo={deleteTodo}
        />}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'start',
    padding: 20,
  },
  title: {
    fontSize: 25
  },

  inputConainer: {
    width: windowWidth,
    marginTop: 20,
  },
  
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 20
  },
  button: {
    fontSize: 50,
  },
  flatList: {
    width: windowWidth,
    marginTop: 20,

  }


});
