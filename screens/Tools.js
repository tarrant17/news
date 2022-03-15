import { Dimensions } from "react-native"

export const isVerySmallDevice = () => {
    return Dimensions.get('window').height < 600
}

export const isVeryBigDevice = () => {
    return Dimensions.get('window').height > 850
}

export const isMediumDevice = () => {
    return !isVerySmallDevice() && !isVeryBigDevice()
}