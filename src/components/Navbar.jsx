import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-slate-100 flex px-6 py-8 justify-between'>
        <div className='text-emerald-500 font-bold text-2xl'>SocialHub</div>
        <div>
            <ul className='flex gap-9 font-semibold text-sm'>
                <li>HOME</li>
                <li>SERVICES</li>
                <li>PREMIUM</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar