import { creepster } from '@/fonts/Creepescer'
import { NextPage } from 'next'

interface Props {  text: string , action? : () => void  }

const SubmitButton: NextPage<Props> = ({text, action}) => {
return (
    <button type='submit' className={` ${creepster.className} w-3/5 px-6 md:px-8 py-2 text-green-400 rounded-xl mx-auto border shadow-2xl  shadow-green-500  hover:scale-105 cursor-pointer`} onClick={action}
    > {text} 
    </button>
)
}
export default SubmitButton