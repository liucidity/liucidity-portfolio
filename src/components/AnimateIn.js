import React from 'react';
import { useInView } from 'react-intersection-observer'
import { Transition } from '@headlessui/react'

const AnimateIn = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: props.threshold || 0,
    rootMargin: '-100px 0px'
  })
  return (
    <div className='h-[200em]'>
      <Transition
        show={inView} appear={false}
        enter="duration-1000 delay-100"
        enterFrom="translate-y-32 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition-opacity duration-50"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* {console.log(inView, ref)} */}
        {props.children}
      </Transition>
      <div ref={ref} />
    </div>
  );
}

export default AnimateIn;
