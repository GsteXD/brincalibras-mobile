import { Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const sair = () => {
    router.replace('/');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff'
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 16
        }}
      >
        Home
      </Text>

      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 24
        }}
      >
        Login realizado com sucesso!
      </Text>

      <TouchableOpacity
        onPress={sair}
        style={{
          backgroundColor: '#000',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 10
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '600'
          }}
        >
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}