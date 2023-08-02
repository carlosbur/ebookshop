import { useState } from "react";
import { styles } from "./styles";
import { COLORS } from "../../themes";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const headerTitle =  isLogin ? 'Login' : 'Register';
    const buttonTitle =  isLogin ? 'Login' : 'Register';
    const messageText =  isLogin ? 'Need an acount?' : 'Already have an acount';

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.header}>{headerTitle}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="email@domain.com"
                    placeholderTextColor={COLORS.grey}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={()=> {}}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="*************"
                    placeholderTextColor={COLORS.grey}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={()=> {}}
                />
            
                <View style={styles.linkContainer}>
                    <TouchableOpacity style={styles.link} onPress={()=> setIsLogin(!isLogin)}>
                        <Text style={styles.linkText}>{messageText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text styles={styles.buttonText}> {buttonTitle} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Auth;

