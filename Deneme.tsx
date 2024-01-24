import React from 'react'
import { View,Text } from 'react-native'

export default function Deneme({name,age}) {
  return (
    <View>
        <Text style={{
            fontSize:42,
            color:"#a00",
        }}>Selam Sana {name} Yaşınız:{age}</Text>
    </View>
  )
}
