import React, { useContext, useState } from 'react'
import { DataContext, DataProvider } from '../../Context/DataContext'
import { Button, Card, CircularProgress, TextField } from '@mui/material'
import styled from '@emotion/styled'

export type ContextType = {
  data: {
    choices: {
      [key: number]: {
        message: {
          content: string
        }
      }
    }
  }
  isLoading: boolean
}

const Prompts = () => {
  const [miles, setMiles] = useState<number | null>(null)

  const [fetch, setFetch] = useState(false)

  const CO2 = typeof miles == 'number' ? miles * 0.347 : null
  // miles * 0.347

  const changeMiles = (miles: string) => {
    setFetch(false)
    try {
      const mileNumber = parseFloat(miles)
      setMiles(mileNumber)
    } catch {}
  }

  return (
    <>
      <Title>Carbon Champ</Title>

      <Container>
        <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
          <Button href="/" variant="contained">
            Home
          </Button>
        </div>
        <SubContainer>
          <TextField
            type="number"
            label="Enter Miles Ridden"
            onChange={(e) => changeMiles(e.target.value)}
          />
          <Button onClick={() => setFetch(true)} variant="contained">
            Submit Miles
          </Button>
        </SubContainer>
        {CO2 !== null && fetch && <h2>Carbon Saved: {CO2}kg C02</h2>}
        {CO2 !== null && fetch && (
          <DataProvider<any>
            requestMetas={{
              url: 'https://api.openai.com/v1/chat/completions',
              options: {
                method: 'post',
                headers: {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_API_KEY}`,
                },
                data: {
                  model: 'gpt-3.5-turbo',
                  messages: [
                    {
                      role: 'system',
                      content:
                        'You will respond in under 100 words with a very random example of what you could do with the energy saved from the carbon',
                    },
                    {
                      role: 'user',
                      content: `I saved ${CO2}kg of c02 emissions`,
                    },
                  ],
                  temperature: 1.2,
                } as any,
              },
            }}
          >
            <DataViewer />
          </DataProvider>
        )}
      </Container>
    </>
  )
}

export default Prompts

const DataViewer = () => {
  const { data, isLoading }: ContextType = useContext(DataContext)
  console.log(data)
  if (isLoading || data == null)
    return (
      <CircularProgress
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    )
  return (
    <div>
      <StyledCard>{data.choices[0].message.content}</StyledCard>
    </div>
  )
}

const StyledCard = styled(Card)`
  margin: 32px;
  padding: 32px;
  font-family: fantasy;
`

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 24px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 24px;
`

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-style: italic;
`
