import { NextPage } from 'next'
import Link from 'next/link'

interface Props { text: string , path : string}

const ButtonGreen: NextPage<Props> = ({text ,path}) => {
  return <Link href={path}>
      <button type='button' className="px-8 py-2 text-green-400 rounded-md border hover:scale-105 cursor-pointer"> {text} </button>
  </Link>
}

export default ButtonGreen