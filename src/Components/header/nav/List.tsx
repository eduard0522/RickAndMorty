import { NextPage } from 'next'
import LisItem from './LisItem'


const List: NextPage = () => {
  return <ul className="flex items-center gap-6 text-sm justify-center ">
      <LisItem text='Home' path='/' />
      <LisItem text='Characters' path='/characters' />
      <LisItem  text='Episodes' path='/episodes'/>
      <LisItem text='Locations' path='/locations' />

    </ul>
}

export default List