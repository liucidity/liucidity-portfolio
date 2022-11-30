import React from 'react';
import { Transition } from '@headlessui/react'
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';
import { useRef, useCallback } from 'react'

const SlideUpComponent = ({ children }) => {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px 0px"
  });

  // Use `useCallback` so we don't recreate the function on each render
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef],
  );

  return (
    <>
      <div className='p-6 min-h-screen' ref={setRefs}>
        <Transition show={inView}
          className="h-fit"
          enter="duration-1000 delay-100"
          enterFrom="translate-y-40 opacity-0"
          enterTo="translate-y-0 opacity-100">
          <div>

            {children}


          </div>
        </Transition>

      </div>
      {/* <div ref={setRefs} >
      </div> */}
    </>
  )

}

export default SlideUpComponent;
