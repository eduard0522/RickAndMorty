import { creepster } from '@/fonts/Creepescer'
import { NextPage } from 'next'
import Link from 'next/link'

interface Props {  text: string , path? : string , action? : () => void  }

const ButtonGreen: NextPage<Props> = ({text ,path, action}) => {

  const Button = (
    <button type='button' className={` ${creepster.className} px-6 md:px-8 py-2 text-green-400 rounded-md border shadow-2xl  shadow-green-500  hover:scale-105 cursor-pointer`}            onClick={action}
    >     {text} 
    </button>
  )
  return path ?  <Link href={path}> {Button} </Link> : (Button) 
}

export default ButtonGreen