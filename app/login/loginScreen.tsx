import { FontAwesome, Ionicons } from '@expo/vector-icons'; // Para os ícones
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useLogin } from '../../hooks/useLogin';
import { styles } from './login.styles';

export default function LoginScreen() {
  const { email, setEmail, senha, setSenha, erro, validarESubmeter } = useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Conectando via outros apps */}
      <View style={styles.socialContainer}>
        <Text style={styles.socialText}>Utilize uma rede social...</Text>
        <View style={styles.iconRow}>
          <Ionicons name="logo-google" size={32} color="#4285F4" />
          <FontAwesome name="facebook-official" size={32} color="#3b5998" />
          <Ionicons name="logo-instagram" size={32} color="#C13584" />
          <Ionicons name="logo-linkedin" size={32} color="#0077B5" />
        </View>
      </View>

      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.orText}>ou</Text>
        <View style={styles.line} />
      </View>

      {/* Formulário */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>E-mail</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
          <TextInput 
            style={[styles.input, erro.senha && styles.inputError]} 
            placeholder="email@email.com" 
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
          <TextInput 
            style={[styles.input, erro.senha && styles.inputError]} 
            placeholder="***************" 
            secureTextEntry 
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={validarESubmeter}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        Não tem uma conta? <Text style={styles.link}>Cadastre-se</Text>
      </Text>
      <Text style={styles.footerText}>
        Esqueceu a senha? <Text style={styles.link}>Recupere aqui</Text>
      </Text>
    </View>
  );
}