import { creepster } from '@/fonts/Creepescer'
import { NextPage } from 'next'

interface Props { title : string}

const TitlePage: NextPage<Props> = ({title}) => {
  return   <h1   className= { `${creepster.className}  [text-shadow:0_0_8px_#4dd613,0_0_12px_#7eec10] text-[#02B5CA] transition text-6xl py-4 text-stroke-200`}
          >
         { title }
      </h1>
}

export default TitlePage