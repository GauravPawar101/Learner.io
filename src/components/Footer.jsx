import React from 'react';
import Socials from './Socials';
import '../css/Footer.css';

export default function Footer() {

  return (
    <div className='my-10 mt-20 mb-0 whole'>
    <div className='above-footer w-full h-[10vh] p-10 flex justify-center items-center'>
    <Socials></Socials>
     </div>
    <div className=' h-[40vh] p-10 flex justify-start items-start' >
        <div className='mx-10 flex flex-col w-[40vh]'>
            <h1 className=' text-2xl underline underline-offset-2' >Creator</h1>
            <h1>Gaurav Pawar</h1>
        </div>
        <div className='mx-10 flex flex-col w-[40vh] mr-[20vh]'>
        <h1 className=' text-2xl underline underline-offset-2' >Products</h1>
        <a href='https://github.com/GauravPawar101/client' className='my-1'>This Project</a>
        <a href='' className='my-1'>Some New</a>
        <a href='' className='my-1'>DIFK MAN</a>
        <a href='' className='my-1'>Special One</a>
        </div>
        <div className=' mx-10 flex flex-col w-[40vh]'>
        <h1 className=' text-2xl underline underline-offset-2' >Contact</h1>
        <p>Email: <a href="mailto:Gauravpawar2522@gmail.com" style={styles.link}>Gauravpawar2522@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890" style={styles.link}>+1 234 567 890</a></p>
        <p>Address: Snow BUnny Heaven</p>
        </div> 
        <div className='mt-12 flex flex-col items-end p-5 justify-end w-[50vh] h-[20vh]'>
            <div ></div>
        <h1>This is made by<a href='https://github.com/GauravPawar101' className='text-blue-500'> Gaurav Pawar</a></h1>
            <div style={styles.copy}>
        <p>© 2024 CBG pvt ltd. All rights reserved.</p>
      </div>
            
        </div>
    </div>
    </div>
  )
}

const styles = {
        link: {
            color: '#61dafb',
            textDecoration: 'none',
        },
        copy: {
            fontSize: '0.875rem',
            marginTop: '1rem',
          },
}