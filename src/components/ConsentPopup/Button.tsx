import React, { ReactNode } from 'react'
import styled from 'styled-components'
import CheckIcon from '../Icons/CheckIcon'

interface button {
  children: ReactNode
  buttonType: string
  selected?: boolean
}

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  /* 
	&.custom,
  &.save {
    width: 130px;
  }

  &.essential,
  &.all {
    width: 200px;
  }
	*/

  &.custom {
    background-color: #1d4a64;

    svg {
      fill: #1d4a64;
    }
  }

  &.save {
    background-color: #d14c22;

    svg {
      fill: #d14c22;
    }
  }

  &.essential {
    background-color: #1d643d;

    svg {
      fill: #1d643d;
    }
  }

  &.all {
    background-color: #942727;

    svg {
      fill: #942727;
    }
  }
`

const SelectedIndicator = styled.div`
  width: 25px;
  aspect-ratio: 1 / 1;
  background-color: #fff;
  opacity: 0.25;
  border-radius: 50%;
  display: grid;
  place-items: center;

  &.selected {
    opacity: 1;
  }

  svg {
    width: 15px;
  }
`

export default function Button({
  children,
  buttonType = 'essential',
  selected = false
}: button) {
  return (
    <ButtonContainer className={buttonType}>
      {children}

      {selected ? (
        <SelectedIndicator className='selected'>
          <CheckIcon />
        </SelectedIndicator>
      ) : (
        <SelectedIndicator />
      )}
    </ButtonContainer>
  )
}
