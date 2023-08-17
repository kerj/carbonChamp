import React from 'react'

interface ButtonProps {
  callback: () => void,
  text: string,
}

export const CallbackButton = ({
  callback,
  text,
}: ButtonProps) => {
  return (
    <>
      <button onClick={callback}>{text}</button>
    </>
  )
}
