const uuid = require("uuid")

Components needed 
1) App
2) ToDoList
3) NewToDoForm
4) ToDo


STEP BY STEP
1) Start with ToDoList component and use the template skeleton
    2) Create a state that keeps track of the Todos 
        -This will use an array that stores the tasks
    3) Create a ul list under the return div where the Todos are going to be placed

4) Move on to Todo component itself and add in an edit button, delete button, and an li passing in props
    5) In the Todolist start wth sample data to test out the props
    6) create a variable with the data set in the ToDoList component
        7) map those props when a todo is passed in - This will pass the props to the child component
        8) Return a <Todo with the prop's tasks 
        9) Now render the Todos from the variable that was created in the ul list from step 3

10) Create the form component
    11) Create the label and input for the form and remember to match the htmlFor and id names
    12) The form needs to have state
        13) the state will be this.state.task
            14) This will be given to the value element of the input
        15) add the onChange element and set to this.handleChange (whenenever there's typing in the input it changes the value)
        16) Create the handleChange event
            17) Bind the function in the constructor
        18) Add an onSubmit to the form with a button
            19) Define the handleSubmit function
        20) handleSubmit will,
            21) Prevent the page from loading aftering onSubmit
            22) will need to use the 'create' function from TodoList component that adds a new li

23) Create the 'create' function in the TodoList compoonent that will then be passed in the handleSubmit function
    -Bind the function
    -create(newTodo)
        -will take the state of all todos and then add the newTodo passed into the array using the spread operator
    -Now pass the method in the return section of the ToDoList to the child ToDoForm as a prop

24) Add the newly created prop to the handle submit funciton
    -When calling the prop, pass in the state
    -Chain of events is like so,

    1) handleSubmit is called when pressing the New Task button
    2) this.props.createToDo will be called and passed in with the argumenet this.state which is {task: ''};
        3)this.props.createToDo is actually taken from the parent component;
        4)the function is defined in the ToDoList component and then passed as a prop to the child
            5) This is because TodoForm is being used in the parent component and you can pass a prop down
            6) the child then can call on the prop which in this case is a function
                7) this function takes all the current this.state.todos and adds the newTodo that is passed
    8) Set the state back to an empty string afterwards
        -this.setState({task: ''})
        -so we can clear the input

25) Adding key to the new objects using uuid
    26) add the key to the new object that is taking everything in the state and then pass in the id
        -The ID will be random from the UUID library

27) The Remove Function
    28) Create a new method in the ToDoList component remove();
    29) Use filter to filter out everything, but the ID being passed
        -meaning filter out the one with the id, everything else stays
        30) end up creating a new array and not manipulating the existing arrray
        31) Pass the method to the Todo compononent and it is then called in the button section
    32) We need to pass in ID next
        -How do we have access to the ID?
        33) we dont have access to key in "Todo Component"
        34) What we do is pass in the key as an id where we return all these todos
            -Todo Compononent now has access to the method

35) Displaying the Edit Input
    -This is taken care of in the Todo componnent where we decide are we displaying a form or task
    -This would be toggled
    -Need to use state
    - Render the input based on a conditional that we set in the state
    -If this.state.isEditing was true, the input would show
        -However, the state is stated to be false, therefore return the task
    -add method to the edit button
        -create a method and set the state to !this.state.isEditing
    -Now create a saved button to click after updating the edited task
        -Create the button with eventhandler
        -create a state with the prop this.props.task (this will show the task that needs to be edited)
        -Create a controlled input 
            -Add the onchange, name, value set to the state of task
    -Take New Task Data and Pass Up to Parent
        -Need to add method to parent component, ToDoList
        -After adding, pass it to the child via props
        -Todo component then binds it and calls it in the method
        -Change the setState to false after editing when clicking the save button

36) TOGGLE COMPLETION
    -