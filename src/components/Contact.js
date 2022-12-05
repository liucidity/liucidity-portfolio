import React from 'react';

const Contact = () => {
  return (
    <section className=' mt-[40em] md:mt-0 flex flex-col justify-center items-center h-screen' id='contact'>
      <span className='text-green text-l'> 03. Contact</span>
      <div>
        <h2 className='text-center text-light-purple text-5xl relative pt-4'>
          Get In Touch
          {/* <span className='h-0.5 w-72 bg-light-purple opacity-25 relative block top-[-0.5em] left-[4em]'></span> */}
        </h2>
      </div>
      <p className='text-light-purple md:text-xl md: w-[24em] text-center p-4'>I'm always interested in discussing all things tech! My inbox is always open. Whether you have any questions, or looking for a quick coffee chat, I'll try my best to get back to you!</p>
      <a href='mailto:travisliu708@gmail.com' target="_blank" rel="noreferrer" className=''>
        <button className='text-light-purple md:text-lg rounded-md bg-green/20  p-4 m-4 border-green border-2 hover:bg-green/60' >
          Email Me!
        </button>
      </a>
    </section>
  );
}

export default Contact;
