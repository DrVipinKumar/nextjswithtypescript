'use client'
import Display from "./Display";

export default function PageDisplay() {
  const info = {
    name: "Dr. Vipin Classes",
    lang: "Next.js",
    lang1: "Typescript",
  };
  const msg =(msg:string)=>{
    alert(msg);
  }
  return (
    <main className="m-2">
      <Display info={info} onPress={msg} />
    
    </main>
  );
}


