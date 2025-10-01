import { NextPage } from 'next'
import { Creepster } from "next/font/google";
import Link from 'next/link';

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
});

interface Props { text: string , path : string}


const LisItem: NextPage<Props> = ({ text , path}) => {
  return  <li>
              <Link
                className= { `${creepster.className}  [text-shadow:0_0_8px_#199948,0_0_12px_#168a41] text-[#1b97d1] transition text-lg hover:text-green-700 dark:text-green-400 dark:hover:text-green-700 text-stroke`}
                href={path}
              >
                {text}
              </Link>
            </li>
}

export default LisItem