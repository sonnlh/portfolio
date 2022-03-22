import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/0d73a8df-c16a-4ea6-a630-b6e8fc233bf6" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600'>Contact</p>
                <p className='py-4 text-gray-300'>// Submit the form below or shoot me an email - sonnlh57@gmail.com</p>
            </div>
            <input className='p-2 bg-white' type="text" placeholder='Name' name='name' />
            <input className='p-2 my-4 bg-white' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 bg-white' name="message" rows="10" placeholder='Message'></textarea>
            <button className='flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-pink-600 hover:border-pink-600'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact