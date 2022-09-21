import React from 'react'

export const ButtonDefault = ({
  Name,
  OnClick
})  => {
  return (
    <button onClick={OnClick}>{Name}</button>
    )
}
