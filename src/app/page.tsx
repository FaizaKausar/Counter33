"use client";
import React from "react";
import { useState } from "react";
// export default function Home() {
//   // let a=1;

//   const [b, setb] = useState(0);
//   // Initialize the state variable b
//   // It return the array when we call this
//   // Array has two things
//   // 1. State Variable
//   // 2. function that change the state variable
//   return (
//     <div>
//       <h1>Main</h1>
//       <p>{b}</p>
//       <button
//         onClick={() => {
//           setb(b + 2);
//           console.log(b);
//         }}
//       >
//         Click
//       </button>
//       <button
//         onClick={() => {
//           // a=a+1
//           // console.log(a);
//           setb(b + 1);
//           console.log(b);
//         }}
//       >
//         Click
//       </button>
//     </div>
//   );
// }
// Integer/Counter in React;
// const Home = () => {
//   const [value, setvalue] = useState(0);
//   return (
//     <div className="outline w-1/2 m-24 p-14 rounded-xl bg-green-100">
//       <h1 className="text-3xl  font-extrabold underline flex justify-center  ">
//         Counter
//       </h1>
//       <div className="flex flex-col rounded-full text-3xl ">
//         <button
//           className=""
//           onClick={() => {
//             setvalue(value + 1);
//           }}
//         >
//           +
//         </button>
//         <button
//           onClick={() => {
//             setvalue(0);
//           }}
//         >
//           Reset
//         </button>

//         <button
//           onClick={() => {
//             setvalue(value - 1);
//           }}
//         >
//           -
//         </button>

//         <p>Value: {value}</p>
//       </div>
//     </div>
//   );
// };

// export default Home;

// String in React

export default function Page() {
  const [value, setvalue] = useState("ABC");

  return (
    <div>
      <button
        onClick={() => {
          setvalue("Faiza Khan");
        }}
      >
        Click Me
      </button>
      <p>{value}</p>
    </div>
  );
}
