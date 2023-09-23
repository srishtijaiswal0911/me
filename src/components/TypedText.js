import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
    const typedElement = useRef(null);

    useEffect(() => {
    const options = {
        strings: ['Full Stack Developer', 'Software Engineer', 'Classical Singer'],
        // startDelay: 100,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        smartBackspace:true,
        showCursor:true,
        loop:true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
        typed.destroy();
    };
    }, []);

    return <span ref={typedElement} className='text-blue-300'/>;
};

export default TypedText;
    