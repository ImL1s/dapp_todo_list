pragma solidity >=0.4.21 <0.6.0;

contract TodoFactory {
    struct Todo {
        string taskName;
        bool isCompleted;
        bool isValid;
    }

    event OnTodoAdded(uint todoId);
    event OnTodoCompleted(uint todoId);
    event OnTodoNotCompleted(uint todoId);

    Todo[] todos;

    modifier isValidTodo(uint _todoId){
        require(_todoId != 0);
        _;
    }

    function addTodo(string memory _taskName) public {
        Todo memory todo = Todo(_taskName, false, true);
        uint todoId = todos.push(todo) - 1;
        emit OnTodoAdded(todoId);
    }

    function deleteTodo(uint _todoId) public isValidTodo(_todoId) {
        todos[_todoId].isValid = false;
    }

    function finishTodo(uint _todoId) public isValidTodo(_todoId) {
//        if (todos.length <= _todoId) {
//            emit OnTodoNotCompleted(_todoId);
//            return;add
//        }
//        Todo memory todo = todos[_todoId];
//        todo.isCompleted = true;
//        emit OnTodoCompleted(_todoId);
    }
}