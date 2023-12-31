import { useReducer, useState } from "react";
import { styles } from "./styles";
import { COLORS } from "../../themes";
import { View, Text, TouchableOpacity } from "react-native";
import { useSignInMutation, useSignUpMutation } from "../../store/auth/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/auth/auth.slice";
import { InputForm } from "../../components";
import { UPDATE_FORM, onInputChange } from "../../utils/form";

const initialState = {
    email : { value: '', error: '', touched: false, hasError: true },
    password : { value: '', error: '', touched: false, hasError: true },
    isFormValid: false,

}

const formReducer = ( state, action ) => {
    switch (action.type) {
        case UPDATE_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid,
            };
        default:
            return state;
    }
}

const Auth = () => {
    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const [isLogin, setIsLogin] = useState(true);
    const headerTitle =  isLogin ? 'Ingresar' : 'Registrarse';
    const buttonTitle =  isLogin ? 'Ingresar' : 'Registrarse';
    const messageText =  isLogin ? 'Necesitas una cuenta?' : 'Ya tengo mi cuenta!';

    const [signIn, {data, }] = useSignInMutation();
    const [signUp] = useSignUpMutation();


    const onHandlerAuth = async () => {
        try {
            if (isLogin) {
                const result = await signIn({email: formState.email.value, password: formState.password.value});
                if(result?.data) dispatch(setUser(result.data));
            } else {
                await signUp({email: formState.email.value, password: formState.password.value});
            }
        }    catch (error) {

            console.error(error)
        } 
    };

    const onHandlerInputChange = ({name, value}) => {
        onInputChange({name, value, dispatch: dispatchFormState,formState})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{headerTitle}</Text>
            <View style={styles.content}>
                <InputForm
                    placeholder="tucorreo@mail.com"
                    placeholderTextColor={COLORS.grey}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text)=> onHandlerInputChange({value: text, name: 'email'})}
                    value={formState.email.value}
                    label="Correo"
                    error={formState.email.error}
                    touched={formState.email.touched}
                    hasError={formState.email.hasError}
                />
                <InputForm
                    style={styles.input}
                    placeholder="*************"
                    placeholderTextColor={COLORS.grey}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(text)=> onHandlerInputChange({value: text, name: 'password'})}
                    value={formState.password.value}
                    label="Contraseña"
                    error={formState.password.error}
                    touched={formState.password.touched}
                    hasError={formState.password.hasError}
                />
            
                <View style={styles.linkContainer}>
                    <TouchableOpacity style={styles.link} onPress={()=> setIsLogin(!isLogin)}>
                        <Text style={styles.linkText}>{messageText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                    disabled={!formState.isFormValid} 
                    style={ !formState.isFormValid ? styles.buttonDisabled : styles.button} onPress={onHandlerAuth}>
                        <Text styles={styles.buttonText}> {buttonTitle} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Auth;

