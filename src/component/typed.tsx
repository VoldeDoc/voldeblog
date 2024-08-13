import { ReactTyped } from "react-typed";

export default function Typing(){
  return(
   <>
    <h1 className="text-5xl mb-8">
    <ReactTyped strings={["Everyone has a story to tell?",
      "We got you covered"]} typeSpeed={70} backSpeed={50} loop />
    </h1>
   </>
  )
}

