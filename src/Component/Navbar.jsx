import React from 'react'
import Product from './Product'
import mypic from '../image/my.jpeg'
const Navbar = () => {
  return (
    <>
     <div className='flex flex-col gap-5'>
        <div className='flex justify-between items-center text-3xl font-bold '>
             <h2 className='text-fuchsia-900'>Code</h2>
             <h4 className='bg-gray-400 p-2  rounded-md'>Card <small>0</small></h4>
        </div>
        <div className='flex gap-10 justify-center flex-wrap'>
        <div>
            <Product title="This a Shoe"  image={mypic}/>
        </div>
        <div>
            <Product title="This a Shoe"  image={mypic}/>
        </div>
        <div>
            <Product title="This a Shoe"  image={mypic}/>
        </div>
        <div>
            <Product title="This a Shoe"  image={mypic}/>
        </div>
        <div>
            <Product title="This a Shoe"  image={mypic}/>
        </div>
        <div>
            <Product title="This a Shoe"  image={mypic}/>
        </div>

        </div>
     </div>
    </>
  )
}

export default Navbar