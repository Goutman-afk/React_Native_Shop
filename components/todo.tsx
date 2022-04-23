import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect,useState } from 'react';
export default function ToDo() {

const [todos,setTodos] = useState([{title: "",category: "", image:'',price:0,description:"",id:0}]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
      .then(json => setTodos(json))
    console.log(todos[0])
  }, []);
  return (
    <View style= {{ flex:2, margin:50, padding:50}} >
     
       <ScrollView > 
      {todos.map(todo =>
        
        <> 
          <Text>{todo.category}</Text>
          <Image source={{ uri: todo.image }} style={{ width: 100, height: 100 }} />
          <Text>{todo.title}</Text>
          <Text>${todo.price}</Text>
        
        </>
        )}
        </ScrollView>
          
        
      
      <Text>quá đã</Text>
      <StatusBar style="auto" />
    </View>
  );
}