import { NextPage } from 'next'
import { Creepster } from "next/font/google";


const creepster = Creepster({ weight: "400", subsets: ["latin"] });

interface Props {subtitle : string ,  content: string}

const Feature: NextPage<Props> = ({ content ,  subtitle}) => {

  const isStatus = subtitle.toLowerCase() === "status";
   const getStatusColor = () => {
    switch (content.toLowerCase()) {
      case "alive":
      case "live": // por si acaso usas "live"
        return "bg-green-500";
      case "dead":
        return "bg-red-500";
      case "unknown":
        return "bg-yellow-400";
      default:
        return "bg-gray-400";
    }
  };


  return <p className='flex items-center'>
      <span className={`${creepster.className} `}>{subtitle}
      </span> : {content} 
       {isStatus && (
          <span
            className={`w-3 h-3 rounded-full inline-block mx-4 ${getStatusColor()}`}
          ></span>
        )}  
      
     </p>
}

export default Feature