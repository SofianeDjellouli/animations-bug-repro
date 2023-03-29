import type { ForwardedRef, ReactNode } from 'react'
import React, { forwardRef } from 'react'
import type { GetProps } from '@tamagui/core'
import { Stack, Text, styled } from '@tamagui/core'

const ButtonStack = styled(Stack, {
  name: 'ButtonStack',
  tag: 'button',
  borderColor: 'black',
  borderWidth: 1,
  paddingTop: 13,
  paddingBottom: 13,
  paddingLeft: 8,
  paddingRight: 8,
  animation: 'fast',
  borderRadius: 3,
  backgroundColor: 'white',
  hoverStyle: { backgroundColor: 'grey' },
  animateOnly: ['background-color'],
})

const ButtonText = styled(Text, {
  name: 'ButtonText',
  fontSize: 12,
  textTransform: 'uppercase',
  color: 'black',
})

export const Button = ({
  children,
  ...props
}: Omit<GetProps<typeof ButtonStack>, 'children'> & {
  children: ReactNode
}) => (
  <ButtonStack debug {...{ ...props }}>
    <ButtonText>{children}</ButtonText>
  </ButtonStack>
)
