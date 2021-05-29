import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native'

const Formfield = ({placeholder, lablevalue, ispassword, ...rest}) => {
    const [invisible, SetVisible] = useState(ispassword)
    const [icon, seticon] = useState('./assets/eye.png')

    const makevisible = () =>{
        invisible == true ? SetVisible(false) : SetVisible(true)
        invisible == true ? seticon('./assets/eye.png') : seticon('./assets/invisible.png')   
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput  secureTextEntry={invisible} style={styles.input} value={lablevalue} placeholder={placeholder} {...rest}/>
            {ispassword==true?
                <TouchableOpacity onPress={makevisible}>
                    {invisible == true?
                    <Image  style={styles.icon} source={require('./assets/eye.png')} /> :
                    <Image  style={styles.icon} source={require('./assets/invisible.png')} />
                    }
                </TouchableOpacity>:null}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        marginTop: 20,
        width: 300,
        borderBottomColor:'#b8b5ae',
        borderWidth: 0,
        borderBottomWidth: 2,
        
      },
      input: {
        height: 30,
        paddingLeft: 10,
        fontSize: 18,
        width: 200,
        color: '#b8b5ae'
      },
      icon: {
          height: 30,
          width: 30,
          marginLeft:60,
          
      }
})

export default Formfield;

