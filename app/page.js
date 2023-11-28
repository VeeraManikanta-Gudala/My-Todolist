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
  const handleEdit = (i) => {
    console.log(i.description);
  }
  let display = <h3>No tasks available</h3>
if(items.length>0){
  display = items.map((t,i)=> {
    return ( 
      <div key={i} className='flex justify-between mb-9 h-10'>
        <h3 className='text-2xl font-bold'>{t.title}</h3>
        <h5 className='font-medium'>{t.description}</h5>
        <button onClick={()=>handleEdit(i)} className='py-2 px-4 bg-red-600 text-white rounded-md'>edit</button>

        <button onClick={()=>handleDelete(i)} className='py-2 px-4 bg-red-600 text-white rounded-md'>Delete</button>
      </div>
    )
  })
}
  return (
    <div>
     
<<<<<<< HEAD
      <div className='p-3 rounded-b-md bg-black text-white font-bold text-center sm:text-center'>My Todolist</div>
     
      <form onSubmit={handleSubmit} className='flex flex-col justify-center text-xl snap-center m-auto'>
        <input type='text' placeholder='Title' className='border-black text-center shadow-lg px-5 py-2 m-auto
        mt-2 text-xl sm:w-[85%]'
=======
      <div className='p-3 rounded-b-md bg-black text-white font-bold text-center w-full'>My Todolist</div>
    <div className='flex items-center'>
      <form onSubmit={handleSubmit} className='text-center text-2xl m-auto'>
        <input type='text' placeholder='title' className='border-black shadow-lg px-5 py-2 m-2 text-xl'
>>>>>>> origin/main
            value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
<<<<<<< HEAD
        <input type='text' placeholder='Description' className='border-black text-center shadow-lg px-5 py-2 
        mt-2 m-auto text-xl sm:w-[85%]'
=======
        <input type='text' placeholder='description' className=' border-3 m-2 shadow-lg border-black px-5 py-2 text-xl'
>>>>>>> origin/main
            value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <hr />
<<<<<<< HEAD
        <div className='flex justify-center'>
      <button className='bg-black text-white font-bold shadow-lg text-xl px-4 py-2 m-auto rounded'>Add</button>      

        </div>
      </form>
      <hr />          
      <div className='p-4 bg-black text-white w-2/3 m-auto rounded-md'>
=======
      <button className='bg-black text-white font-bold shadow-lg text-xl px-4 py-2 m-auto my-3 rounded'>Add</button>      
      </form>
      </div>
      <div className='p-4 bg-black text-white w-7/12 m-auto rounded-md'>
>>>>>>> origin/main
          {display}
      </div> 
    </div>
  )
}


export default page
