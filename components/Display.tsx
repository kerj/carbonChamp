import Link from 'next/link'
import { CallbackButton } from './CallbackButton'
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import styled from '@emotion/styled'
import { Button } from '@mui/material'

export type ContextType = {
  data: {
    message: string
  }
}

export const Display = () => {
  const { data }: ContextType = useContext(DataContext)
  console.log(data)
  return (
    <Container>
      <ImageContainer>
        <img src="./bicycle.jpg" alt="bicycle" style={{ width: '50%' }} />
      </ImageContainer>
      <Divider />
      <ButtonContainer>
        {/* <Button href="/quoteDisplay/quotes" variant="contained">
          Register New Ride
        </Button>
        <Button href="/quoteDisplay/quotes" variant="contained">
          View Rides
        </Button> */}
        <Button href="/quoteDisplay/prompts" variant="contained">
          Carbon Stats
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default Display

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: calc(100vh - 10rem);
`
const Divider = styled.div`
  height: calc(100vh - 70%);
  border-radius: 10px;
  border: 1px solid #c6c6c67d;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
