import React from "react";
import { useSpring, animated } from 'react-spring';

const Description = () => {
    const revealFromBottom = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 } 
    });
        return (
            <div className="p-4">
                <animated.h1 style={revealFromBottom} className="text-xl font-semibold mb-4">Welcome to SyntaxIQ</animated.h1>
                    <p className="text-left text-md mb-4">
                        SyntaxIQ revolutionizes the coding process with an AI-powered code review assistant, 
                        making development faster, smarter, and more reliable. Seamlessly integrating with your 
                        favorite IDEs, it offers real-time feedback and suggestions to improve code quality and 
                        ensure standards compliance. Enhance collaboration across your team with shared insights, 
                        and stay ahead of performance and security issues with proactive analysis. With SyntaxIQ, 
                        you're not just coding; you're crafting the future of software with every line.
                    </p>
        </div>
        );
    };

export default Description;
