import React from 'react';

const Contact = () => {
  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <span className='text-green text-l'> 03. Contact</span>
      <div>
        <h2 className='text-light-purple text-6xl relative'>
          Get In Touch
          {/* <span className='h-0.5 w-72 bg-light-purple opacity-25 relative block top-[-0.5em] left-[4em]'></span> */}
        </h2>
      </div>
      <p className='text-light-purple text-xl w-[24em] text-center'>I'm always interested in discussing all things tech! My inbox is always open. Whether you have any questions, or looking for a quick coffee chat, I'll try my best to get back to you!</p>
    </section>
  );
}

export default Contact;
