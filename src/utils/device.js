import { Dimensions, Platform } from 'react-native'

export const isIPhoneX = () => {
  const dimensions = Dimensions.get('window')

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimensions.height === 812 || dimensions.width === 812) // Taking rotation into account.
  )
}

export const ifIPhoneX = (iPhoneXStyle, otherStyle) => {
  if (isIPhoneX()) {
    return iPhoneXStyle
  }

  return otherStyle
}
