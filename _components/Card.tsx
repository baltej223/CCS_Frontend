// import React from "react";

interface CardProps{
    children:React.ReactNode,
    width?:string,
    height?:string
    className?:string
};


export default function Card({children, width, height, className}:CardProps){ 
    return (

    <div className={` rounded-2xl p-6 text-center 
    border border-white/20 bg-linear-to-l 
    from-white/10 to-white/5 backdrop-blur-sm 
    ${className}
    `}
    style={{width, height}}
    >
      {children}
    </div>
  );
}