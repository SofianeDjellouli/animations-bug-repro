import { animations } from './animations'
import { createFont, createTamagui, createTokens } from '@tamagui/core'
import { createMedia } from '@tamagui/react-native-media-driver'

const interFont = createFont({
  family: 'Inter, Helvetica, Arial, sans-serif',
  // keys used for the objects you pass to `size`, `lineHeight`, `weight`
  // and `letterSpacing` should be consistent. The `createFont` function
  // will fill-in any missing valus if `lineHeight`, `weight` or `letterSpacing`
  // are subsets of `size`
  size: { 1: 12, 2: 14, 3: 15 },
  lineHeight: {
    2: 22,
  },

  weight: {
    1: '300',
    // 2 will be 300
    3: '600',
  },

  letterSpacing: {
    1: 0,
    2: -1,
    // 3 will be -1
  },

  // (native) swap out fonts by face/style

  face: {
    300: { normal: 'InterLight', italic: 'InterItalic' },
    600: { normal: 'InterBold' },
  },
})
// these keys can be different, but again we highly recommend consistency

const size = {
  0: 0,
  1: 5,
  2: 10,
  // ....
}

export const tokens = createTokens({
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: { white: '#fff', black: '#000' },
})

export const config = createTamagui({
  animations,
  fonts: {
    // for tamagui, heading and body are assumed
    heading: interFont,
    body: interFont,
  },
  tokens,
  themes: {
    light: { bg: '#f2f2f2', color: tokens.color.black },
    dark: { bg: '#111', color: tokens.color.white },
  },
  // `@tamagui/core` doesn't provide media query capabilities out of the box
  // for native as it is de-coupled from react-native.
  // For web-only, media queries work out of the box and you can avoid the
  // `createMedia` call here by passing the media object directly.
  // If targeting React Native, add this driver and `createMedia` call.
  // `tamagui` and `config` do this for you automatically.
  media: createMedia({
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
  // optional:
  // add custom shorthand props
  shorthands: {
    ac: 'alignContent',
    ai: 'alignItems',
    als: 'alignSelf',
    bblr: 'borderBottomLeftRadius',
    bbrr: 'borderBottomRightRadius',
    bc: 'backgroundColor',
    br: 'borderRadius',
    btlr: 'borderTopLeftRadius',
    btrr: 'borderTopRightRadius',
    f: 'flex',
    jc: 'justifyContent',
    o: 'opacity',
    bw: 'borderWidth',
    boc: 'borderColor',
    // ...
  } as const,

  // Experimental / advanced, only for overriding the core component styles
  // Prefer to use styled() for building your own, only useful for edge cases.

  // defaultProps: {
  //   Text: {
  //     // override any default props here
  //   },
  // },
})

export type AppConfig = typeof config

declare module '@tamagui/core' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends AppConfig {}
}
