'use client'

import Input from './Input'
import SubmitButton from './SubmitButton'
import Link from 'next/link'
import { creepster } from '@/fonts/Creepescer'
import { useState } from 'react'
import { UserLogin } from '@/Interfaces/AuthStore'
import { useAuthStore } from '@/stores/auth/useAuthStore'
import { usePopUpStore } from '@/stores/popUp/usePopUpStore'



const LoginForm = ({}) => {

  const user = useAuthStore( state => state.user)
  const { login, logout} = useAuthStore()

  const [data, setData] = useState<UserLogin>({ username: '', password: '' })
   const setOpen = usePopUpStore(state => state.setOpen )
   const setDataPopUp = usePopUpStore(state => state.setDataPopUp )


  const handleChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    const {name ,value } = e.target
    setData({...data , [name] : value})
  }

  const handleSubmmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(data.username === user?.email && data.password === user.password ){
        setOpen()
        setDataPopUp("Bienvenido al Portal" , "/" , login)
        setData({ password : "" , username : ""})
    }else{
        setOpen()
        setDataPopUp("Credenciales Invalidas" , "/login", logout)
        setData({ password : "" , username : ""})
    }
  }

  return (
    <form 
    onSubmit={handleSubmmit}
    className='text-zinc-100 flex flex-col gap-8 bg-emerald-500/30 backdrop-blur-sm border border-emerald-500 rounded-2xl px-8 py-16'>
      <h1
        className={`${creepster.className} text-center text-green-500 text-xl lg:text-5xl font-semibold`}
      >
        Portal de acceso
      </h1>
      <Input
        inputLabel='Usuario'
        inputType='email'
        inputPlaceholder='Ej: rick@gmail.com'
        name='username'
        value={data.username}
        onChange={handleChange}
      />
      <Input
        inputLabel='Clave Secreta'
        inputType='password'
        inputPlaceholder='**********'
        name='password'
        value={data.password}
        onChange={handleChange}
        minLength={8}
      />
      <SubmitButton text='Sumergirme!'/>

      <div className='flex flex-col gap-4 items-center justify-center text-center'>
        <Link href='/login'>
          <p>
            ¿Problemas con tu clave secreta? {' '}
            <span className='text-green-500 underline'>
               Recuperar contraseña
            </span>
          </p>
        </Link>
        <Link href='/login'>
          <p>
            ¿Nuevo en esta dimensión? {' '}
            <span className='text-green-500 underline'>  Regístrate </span>
          </p>
        </Link>
      </div>
    </form>
  )
}
export default LoginForm