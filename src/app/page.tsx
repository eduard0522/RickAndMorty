import { NextPage } from 'next'
import Image from 'next/image'

import { Creepster } from "next/font/google";
import ButtonGreen from '@/Components/buttons/ButtonGreen';

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
});

const Page: NextPage = () => {
  return <div className=" w-full h-screen  flex items-center flex-col gap-8" >
      <Image 
        src='/logo2.png'
        alt='logo de rick and morty'
        width={350}
        height={80}
      />
        <Image
               src="/Title2.png"
               alt="Imagen con el texto de Rick and Morty"
               width={400}
               height={20}
        />
        <div className={`${creepster.className} flex gap-8 `} >  
           <ButtonGreen text='Personajes' path='/characters'/>
           <ButtonGreen text='Temporadas' path='/seasons'/>
           <ButtonGreen text='Capitulos' path='/chapter'/>
        </div>
      
  </div>
}

export default Page