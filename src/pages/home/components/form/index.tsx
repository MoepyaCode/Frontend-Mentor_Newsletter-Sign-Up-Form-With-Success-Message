import React from 'react'
import Mobile from '@app-assets/images/illustration-sign-up-mobile.svg'
import Desktop from '@app-assets/images/illustration-sign-up-desktop.svg'
import SuccessIcon from '@app-assets/icons/icon-list.svg'
import { Wrapper } from '@app-components'
import { useWindowSize } from '@app-hooks'

type Props = {
  isEmailValid: boolean | null
  handleSetEmail: (value: string) => void
}

export default function Form(props: Props) {
  const size = useWindowSize();
  const [error, setError] = React.useState<string>('')

  const renderImage = () => {
    switch (size) {
      case 'desktop':
        return Desktop
      case 'mobile':
        return Mobile
      default:
        return Desktop
    }
  }

  const renderSuccessList = () => {
    const Data = [
      'Product discovery and building what matters',
      'Measuring to ensure updates are a success',
      'And much more!',
    ]

    return (
      <ul className='flex flex-col gap-[10px]'>
        {Data.map((item) => (
          <li className='flex items-start gap-4' key={item}>
            <img src={SuccessIcon} alt="" />
            <span className='body'>{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted')

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    props.handleSetEmail(email)
  }

  React.useEffect(() => {
    console.log('isEmailValid', props.isEmailValid)

    if (props.isEmailValid === false) {
      setError('Valid email required')
    } else {
      setError('')
    }

  }, [props.isEmailValid, setError])

  return (
    <Wrapper className='bg-white flex flex-col md:flex-row-reverse md:p-6 md:rounded-[36px] text-navy-dark max-w-[928px] md:w-full md:justify-between'>
      <img className='object-contain' src={renderImage()} alt="" />

      <Wrapper className='flex-grow mx-6 my-10 flex flex-col gap-10 md:my-auto md:max-w-[376px]'>
        <Wrapper className='flex flex-col gap-6'>
          <h1 className='heading-small'>Stay updated!</h1>

          <p className='body'>Join 60,000+ product managers receiving monthly updates on:</p>

          {renderSuccessList()}
        </Wrapper>

        <form onSubmit={handleSubmit} className='flex-grow flex flex-col gap-6'>
          <label className='flex flex-col gap-2' htmlFor="">
            <div className='flex justify-between'>
              <h2 className='body-small'>Email address</h2>
              {!props.isEmailValid && <span className='text-vermellion body-small'>{error}</span>}
            </div>
            <input className={`pl-6 py-4 outline-none border ${(props.isEmailValid || props.isEmailValid !== null) ? 'border-vermellion bg-[rgba(255,97,97,.15)] placeholder:text-vermellion' : 'border-[#D8D8D8] focus:border-navy-dark text-navy-dark'}  rounded-lg body transition-colors ease-in`} type="email" name='email' placeholder='email@company.com' autoComplete='off' />
          </label>

          <button className='transition-all duration-300 ease-in-out bg-navy-dark text-white min-h-[56px] rounded-lg body-bold hover:bg-gradient-1 hover:shadow-[0_16px_32px_0_rgba(255,97,85,.5)]' type="submit">
            Subscribe to monthly newsletter
          </button>
        </form>
      </Wrapper>
    </Wrapper>
  )
}
