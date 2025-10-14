import Login from '@/Components/login/Login'
import PopUp from '@/Components/popUp/PopUp'
import { NextPage } from 'next'

const Page: NextPage = ({}) => {
  return (
    <div>
      <PopUp/>
      <Login />
    </div>
  )
}

export default Page
