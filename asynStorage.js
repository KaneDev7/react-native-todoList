import AsyncStorage from "@react-native-async-storage/async-storage";

export class AsyncStorageService{
     loadTodos = async () => {
        try {
          const storedTodos = await AsyncStorage.getItem('todos');
          if (storedTodos !== null) {
            return JSON.parse(storedTodos)
          }
          return []
        } catch (error) {
          console.error('Erreur lors du chargement des todos:', error);
        }
      };
    
       saveTodos = async (todos) => {
        try {
          await AsyncStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
          console.error('Erreur lors de la sauvegarde des todos:', error);
        }
      };
}