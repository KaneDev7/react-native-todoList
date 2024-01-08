import React from 'react'

import RenderItem from './RenderITem';



export default function ListItem({ todo, toogleTodo, deleteTodo, filterSelected }) {

    if (todo && filterSelected === 'completed' && todo.completed) {
       return <RenderItem
            todo={todo}
            toogleTodo={toogleTodo}
            deleteTodo={deleteTodo}
        />
    } else if (todo && filterSelected === 'pendding' && !todo?.completed) {
       return <RenderItem
            todo={todo}
            toogleTodo={toogleTodo}
            deleteTodo={deleteTodo}
        />
    } else if (todo && filterSelected === 'all') {
       return <RenderItem
            todo={todo}
            toogleTodo={toogleTodo}
            deleteTodo={deleteTodo}
        />
    }


}

