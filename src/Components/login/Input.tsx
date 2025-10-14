import { NextPage } from 'next'

interface Props {
  inputLabel: string
  inputType: string
  inputPlaceholder: string
  name: string
  value: string
  minLength?  : number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: NextPage<Props> = ({
  inputLabel,
  inputType,
  inputPlaceholder,
  name,
  value,
  minLength,
  onChange
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={inputLabel}> {inputLabel} </label>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        name={name}
        value={value}
        onChange={onChange}
        required
        minLength={minLength}
        className=' py-2 md:py-3 px-2 md:px-4 rounded-2xl bg-zinc-400/20 flex items-center'
      />
    </div>
  )
}

export default Input
