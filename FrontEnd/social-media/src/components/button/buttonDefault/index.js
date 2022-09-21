import React from 'react'
import { Button } from './style'
export const ButtonDefault = ({
  Name,
  OnClick
})  => {
  return (
    <Button onClick={OnClick}>{Name}</Button>
    )
}
