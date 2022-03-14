import React from 'react'
import Toast, { BaseToast } from 'react-native-toast-message';

type Props = {
}

const toastConfig = {
    info: (props) => (
      <BaseToast
        {...props}
        style={{ borderWidth: 0, borderColor:'white' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontFamily: 'Newsreader_700Bold'
        }}
        text2Style= {{
          fontSize: 12,
          fontFamily: 'Nunito_400Regular'
        }}
      />
    ),
  }

const CustomToast = (props: Props) => {
  return (
    <Toast config={toastConfig}/>
  )
}

export default CustomToast