"use client";
import { revalidatePath } from "next/cache";
import { cache, useState } from "react";

const getItem = cache((id:number) => {
  console.log(id * 2)
  return id * 2
})

const Button = () => {

  const [id, setId] = useState<number>(0)

  return <div>
    <input type="text" onChange={e => setId(Number(e.target.value))} className=" text-blue-700" />
    <button onClick={() => getItem(id)}>Click</button>
  </div>
};

export default Button;
