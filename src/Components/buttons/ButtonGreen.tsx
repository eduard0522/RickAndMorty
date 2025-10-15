"use client"
import { creepster } from '@/fonts/Creepescer'
import { usePopUpStore } from '@/stores/popUp/usePopUpStore'
import { NextPage } from 'next'
import Link from 'next/link'

interface Props {  text: string , path? : string , action? : () => void , close? : boolean }

const ButtonGreen: NextPage<Props> = ({text ,path, action , close }) => {

  const { setOpen } = usePopUpStore()

  const handleClick = () => {
      if(close){
        setOpen()
      }
      return action ? action() : null
  }

  const Button = (
    <button type='button' className={` ${creepster.className} px-6 md:px-8 py-2 text-green-400 rounded-md border shadow-2xl  shadow-green-500  hover:scale-105 cursor-pointer`}   
     onClick={handleClick} 
    >     {text} 
    </button>
  )
  return path ?  <Link href={path}> {Button} </Link> : (Button) 
}

export default ButtonGreen