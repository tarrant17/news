import { Dimensions } from "react-native"

export const isVerySmallDevice = () => {
    return Dimensions.get('window').height < 600
}
