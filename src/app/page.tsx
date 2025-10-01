import { NextPage } from 'next'
import Image from 'next/image'
import ButtonGreen from '@/Components/buttons/ButtonGreen';
import { creepster } from '@/fonts/Creepescer';


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
        <div className={`${creepster.className} flex gap-4 md:gap-8 `} >  
           <ButtonGreen text='Characters' path='/characters'/>
           <ButtonGreen text='Episodes' path='/episodes'/>
           <ButtonGreen text='Locations' path='/locations'/>
          
        </div>
      
  </div>
}

export default Page