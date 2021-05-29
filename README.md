# rn-password-field
Customizable react native password field with visibility eye icon.

## Installation
`$ npm install --save rn-password-field`

## usage

```js
 import Formfield from 'rn-password-field'; 
 ```
 Use Formfield component tag along with properties as below.
 
 ```js
<FormInput placeholder='Password' ispassword={true}/>
 ```
 You can also use the same component for plain text field by setting ispassword to `false`
 ```js
<FormInput placeholder='Username' lablevalue='Joan' ispassword={false}/>
 ```
### Properties

|props|value  | required | default value|
|--|--|--|--|
| placeholder | `String`  | No | Null |
| lablevalue | `String`  | No | Null |
| ispassword | `bool`  | Yes | Null |
| style | `style`  | No |  |

### example: 
``` js
import React, {useState} from 'react'
import { View, Button } from 'react-native'
import Formfield from 'rn-password-field';

export default function login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const onLoginPress = () =>{
        //your code for login action
    }
    
    return(
        <View>
                <FormInput onChangeText={e=>{setUsername(e)}}  placeholder='Email Id / Phone number' lablevalue={username} ispassword={false}/>
                <FormInput onChangeText={e=>{setPassword(e)}} placeholder='Password' lablevalue={password} ispassword={true}/>
                <Button onPress={onLoginPress} title="Login" />
        </View>
    )
}
```
