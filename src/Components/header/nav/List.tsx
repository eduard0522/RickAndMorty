import { NextPage } from 'next'
import LisItem from './LisItem'
import ButtonGreen from '@/Components/buttons/ButtonGreen'
import { useAuthStore } from '@/stores/auth/useAuthStore'

const List: NextPage = () => {
  const logout = useAuthStore((state) => state.logout)
  const clearAuth = () => {
    logout() 
    document.cookie = "auth=; path=/; max-age=0;"
    localStorage.clear()
  }
  return (
    <ul className="flex items-center gap-6 text-sm justify-center">
      <LisItem text='Home' path='/' />
      <LisItem text='Characters' path='/characters' />
      <LisItem text='Episodes' path='/episodes' />
      <LisItem text='Locations' path='/locations' />
      <ButtonGreen text='Cerrar Sesión' action={clearAuth} path='/login' />
    </ul>
  )
}

export default List
