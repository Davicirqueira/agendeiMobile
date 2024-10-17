import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import icons from "../../constants/icon.js";
import { styles } from "./login.style.js";
import Button from "../../components/button/button.jsx";


export default function Login() {

    return (

        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Image source={icons.logo} style={styles.logo} />
            </View>

            <View>

                <View style={styles.spaceInput}>

                    <TextInput placeholder="E-mail" placeholderTextColor={"#a0a0a0"} style={styles.input} />

                </View>

                <View style={styles.spaceInput}>

                    <TextInput placeholder="Senha" placeholderTextColor={"#a0a0a0"} style={styles.input} 
                    secureTextEntry={true}/>

                </View>

                <Button text="Acessar" />

            </View>

            <View style={styles.footer}>

                <Text style={styles.notCount}>Não tenho conta.</Text>
                <TouchableOpacity>
                    <Text style={styles.footerLink}> Criar conta agora.</Text>
                </TouchableOpacity>

            </View>

        </View>

    );

}