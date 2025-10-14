"use client"

import { usePopUpStore } from "@/stores/popUp/usePopUpStore"
import ButtonGreen from "../buttons/ButtonGreen"
import { IoCloseCircleOutline } from "react-icons/io5"
import { creepster } from "@/fonts/Creepescer"


const PopUp = ({ }) => {

  const isModalOpen = usePopUpStore(state => state.isOpen) 
  const setOpen = usePopUpStore(state => state.setOpen )
  const text = usePopUpStore(state => state.text )
  const path = usePopUpStore(state => state.path )

  if( !isModalOpen ) return null
  return <div  className="fixed inset-0  bg-black/70  z-20 flex justify-center items-center flex-col">
    
    <div className="relative w-72 z-30 h-56 bg-slate-950 shadow-emerald-400 shadow-2xl rounded-xl  flex flex-col justify-center items-center gap-12">
     <div className="absolute top-2 right-2 text-zinc-100 z-50 hover:text-emerald-400 text-3xl cursor-pointer" onClick={setOpen}>
       <IoCloseCircleOutline  />
     </div>
      <h2 className={`${creepster.className} text-green-500`}>{text}</h2>
      <ButtonGreen text="Continuar" action={setOpen} path={path} />
    </div>
  </div>
}

export default PopUp