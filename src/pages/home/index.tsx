import { useEmailVerification } from "@app-hooks"
import { Main } from "../../components"
import { Form, SubmittedForm } from "./components"

export default function Home() {
  const {
    email,
    verifyEmail,
    resetEmail,
    isEmailValid
  } = useEmailVerification()


  const handleSetEmail = (value: string) => {
    verifyEmail(value)
  }

  return (
    <Main className="font-roboto bg-[#36384D] grid place-items-center ">
      {!isEmailValid ? (
        <Form
        isEmailValid={isEmailValid}
        handleSetEmail={handleSetEmail}
      />
      ) 
      : (
        <SubmittedForm 
        resetEmail={resetEmail}
        email={email} />
      )}
    </Main>
  )
}