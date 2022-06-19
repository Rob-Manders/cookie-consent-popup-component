import React, { useState } from 'react'
import styled from 'styled-components'
import cookieIcon from '../assets/icons/cookie-bite-solid.svg'

const ConsentPopupContainer = styled.div`
  position: absolute;
  display: block;
  bottom: 0.5rem;
  left: 0.5rem;
  right: 0.5rem;
  background-color: #d9d9d9;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
  min-height: 3rem;
  padding: 10px;

  .introBlock {
    display: flex;
    justify-content: space-between;

    .cookieIcon {
      width: 40px;
      aspect-ratio: 1 / 1;
    }

    p {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 0;

      a {
        margin-top: 0.25rem;
      }
    }
  }
`

export default function ConsentPopup() {
  const [selection, setSelection] = useState('none')
  const [option, setOption] = useState({
    functional: true,
    analytics: true,
    advertisement: true
  })

  return (
    <ConsentPopupContainer>
      <div className='introBlock'>
        <img className='cookieIcon' src={cookieIcon} alt='' />
        <p>
          This website uses cookies. <a href='#'>Find out more</a>
        </p>
      </div>
    </ConsentPopupContainer>
  )
}
