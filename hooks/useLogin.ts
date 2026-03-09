import { useRef, useState } from 'react';
import { Animated } from 'react-native';

export const useLogin = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [erro, setErro] = useState({ email: false, senha: false });

    const focusAnimEmail = useRef(new Animated.Value(0)).current;
    const focusAnimSenha = useRef(new Animated.Value(0)).current;

    const animateFocus = (value: Animated.Value, toValue: number) => {
        Animated.timing(value, {
        toValue,
        duration: 200, 
        useNativeDriver: false, 
        }).start();
    };

    const validarESubmeter = () => {
        let temErro = false;
        const novoErro = { email: false, senha: false };

        if (!email) { novoErro.email = true; temErro = true; }
        if (!senha) { novoErro.senha = true; temErro = true; }

        setErro(novoErro);
    };

    return { 
        email, setEmail, 
        senha, setSenha,
        erro, validarESubmeter,
        focusAnimEmail, animateFocus,
        focusAnimSenha };
};