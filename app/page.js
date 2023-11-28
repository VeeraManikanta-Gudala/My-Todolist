"use client";
import React from 'react'

const page = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState(''); 
  const [items, setItems] = React.useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    setItems([...items,{title,description}])
    console.log(items);
    setTitle('');
    setDescription('');
  }
  const handleDelete = (i)=>{
    let newCopy = [...items]
    newCopy.splice(i,1)
    setItems(newCopy);
  }
  let display = <h3>No tasks available</h3>
if(items.length>0){
  display = items.map((t,i)=> {
    return ( 
      <div key={i} className='flex justify-between mb-9 h-10'>
        <h3 className='text-2xl font-bold'>{t.title}</h3>
        <h5 className='font-medium'>{t.description}</h5>
    
        <button onClick={()=>handleDelete(i)} className='py-2 px-4 bg-red-600 text-white rounded-md'>Delete</button>
      </div>
    )
  })
}
  return (
    <div>
     
      <h1 className='py-4 px-1 bg-black text-white font-bold text-center text-2xl'>My Todolist</h1>
    <div className='flex items-center'>
      <form onSubmit={handleSubmit} className='text-center text-4xl m-auto'>
        <input type='text' placeholder='title' className='border-black shadow-md px-11 py-6 m-3 text-2xl'
            value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input type='text' placeholder='description' className=' border-3 m-3 shadow-md border-black px-11 py-6 text-2xl w-3/4'
            value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <hr />
      <button className='bg-black text-white font-bold text-xl px-4 py-2 mx-auto my-3 rounded w-3/4'>Add</button>      
      </form>
      </div>
      <div className='p-4 bg-black text-white w-2/3 m-auto rounded-md w-full sm:w-3/4'>
          {display}
      </div> 
    </div>
  )
}


export default page
