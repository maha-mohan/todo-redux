import React,{useState} from 'react'
import { connect} from 'react-redux';
import  {addTodos} from '../redux/reducer';


const mapStateToprops =(state) =>{
    return{
        todos: state,
    };
};

const  mapDispatchToProps = (dispatch) =>{
    return{
        addTodo :(obj) => dispatch(addTodos(obj)),
    };
};


const Todos =(props) => {

 

    const [todo, setTodo] = useState('')

    
    const add =() =>{
        if(todo===''){
            alert('input is Empty')
        }else{
            props.addTodo({
                id:Math.floor(Math.random()*1000),
                item : todo,
                completed : false,
            });
            setTodo('');
        }
    };

     
    const handleChange =(e)=>{
        setTodo(e.target.value);
    };

   
  
    return (
    <div className='addTodos'>
    <input
    type='text'
    onChange={(e) =>handleChange(e)}
    className='todo-input'
    value={todo}
  
    />

    <button className='add-btn'
    onClick={()=>add()}> +
    </button>
    <br />

 

    </div>
  );
};


export default connect ( mapStateToprops, mapDispatchToProps )(Todos);