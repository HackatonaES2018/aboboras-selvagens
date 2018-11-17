import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = (props) => (
    <TouchableOpacity style={{ backgroundColor: '#002d72', borderRadius: 10 }}>
        <Text style={{ padding: 15, textAlign: 'center', fontSize: 18, fontFamily: 'lato-regular', color: '#fff' }}>{props.children}</Text>
    </TouchableOpacity>
)


export default Button