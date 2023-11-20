import React from 'react';

const TodoList = () => {
    const [value, setValue] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const handleClick=()=>{
        if(value !="" && todos !="") {
        setTodos([...todos, value]);
        setValue('');
    }}
    const handleDelete=(index)=>{
        todos.handleDelete(index,1);
        setTodos([...todos]);
    }
    return (
        <>
            <div className=' container  row g-3'>
                <h2> Future Projects </h2>
                
                <input className='form-control  col-md-10'
                    type="text"
                    placeholder='Add Project'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button className='btn btn-primary col-md-2'
                    onClick={(handleClick) => {
                        setTodos([...todos, value]);
                        setValue('');
                    }}>
                    Add
                </button>
            </div>
            <div className='container'>
                {todos.map((todo, index) => (
                    <div key={index}>
                        {todo}
                        <button className='btn btn-danger'
                            onClick={(handleDelete) => {
                                todos.splice(index, 1);
                                setTodos([...todos]);
                            }}>
                            X</button>
                    </div>
                ))}
            </div>
        </>
    );
}
export default TodoList;