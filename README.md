# rn-password-field
Customizable react native password field with visibility eye icon.
![output](https://github.com/Ketan2010/rn-password-field/blob/main/assets/output/output_one.jpeg)

## Installation
`$ npm install --save rn-password-field`

## Usage

```js
 import Formfield from 'rn-password-field'; 
 ```
 Use Formfield component tag along with properties as below.
 
 ```js
<Formfield placeholder='Password' ispassword={true}/>
 ```
 You can also use the same component for plain text field by setting ispassword to `false`
 ```js
<Formfield placeholder='Username' lablevalue='Joan' ispassword={false}/>
 ```
### Properties

|props|value  | required | default value|
|--|--|--|--|
| placeholder | `String`  | No | Null |
| lablevalue | `String`  | No | Null |
| ispassword | `bool`  | Yes | Null |
| style | `style`  | No |  |

### Example: 
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
                <Formfield onChangeText={e=>{setUsername(e)}}  placeholder='Email Id / Phone number' lablevalue={username} ispassword={false}/>
                <Formfield onChangeText={e=>{setPassword(e)}} placeholder='Password' lablevalue={password} ispassword={true}/>
                <Button onPress={onLoginPress} title="Login" />
        </View>
    )
}
```
### Output:
![output](https://github.com/Ketan2010/rn-password-field/blob/main/assets/output/output_one.jpeg) <br>
![output](https://github.com/Ketan2010/rn-password-field/blob/main/assets/output/output_two.jpeg) <br>
![output](https://github.com/Ketan2010/rn-password-field/blob/main/assets/output/output_three.jpeg) <br>

