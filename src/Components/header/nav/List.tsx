import { NextPage } from 'next'
import LisItem from './LisItem'


const List: NextPage = () => {
  return <ul className="flex items-center gap-6 text-sm">
      <LisItem text='Inicio' path='/' />
      <LisItem text='Personajes' path='/characters' />
      <LisItem  text='Temporadas' path='seasons'/>
      <LisItem text='Episodios' path='/chapters' />

    </ul>
}

export default List