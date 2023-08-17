import React, { useContext, useState } from 'react'
import { DataContext, DataProvider } from '../../Context/DataContext'
import { Card, CircularProgress, TextField } from '@mui/material'
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
    try {
      const mileNumber = parseFloat(miles)
      setMiles(mileNumber)
    } catch {}
  }

  return (
    <div>
      <TextField type="number" onChange={(e) => changeMiles(e.target.value)} />
      {CO2 !== null && (
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
                      'You are a narrator, you will respond with one very random specific example about relatable instances of what could be done with the amount of saved carbon, respond in an iambic pentameter',
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
    </div>
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
