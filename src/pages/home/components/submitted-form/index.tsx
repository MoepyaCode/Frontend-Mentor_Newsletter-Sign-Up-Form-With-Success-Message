import { Wrapper } from '@app-components'
import React from 'react'
import SubmittedFormIcon from '@app-assets/icons/icon-success.svg'

type Props = {
    resetEmail: () => void
    email: string
}

export default function SubmittedForm(props: Props) {
    return (
        <Wrapper className='min-h-screen sm:min-h-fit max-w-[504px] w-full bg-white sm:p-[64px] sm:pt-[48px] flex flex-col justify-center items-center rounded-[36px]'>
            <Wrapper className='flex flex-col gap-10 flex-grow justify-evenly px-6 md:px-0 md:justify-normal md:flex-grow-0'>
                <Wrapper className='flex flex-col gap-10'>
                    <img className='object-contain self-start' src={SubmittedFormIcon} alt="" />

                    <Wrapper className='flex flex-col gap-6'>
                        <h1 className='heading-small md:heading'>Thanks for subscribing!</h1>
                        <p className='body'>A confirmation email has been sent to <span className='body-bold'>{props.email}</span> Please open it and click the button inside to confirm your subscription</p>
                    </Wrapper>
                </Wrapper>

                <button onClick={props.resetEmail} className='transition-all duration-300 ease-in-out bg-navy-dark text-white min-h-[56px] rounded-lg body-bold hover:bg-gradient-1 hover:shadow-[0_16px_32px_0_rgba(255,97,85,.5)]' >
                    Dismiss message
                </button>
            </Wrapper>


        </Wrapper>
    )
}
