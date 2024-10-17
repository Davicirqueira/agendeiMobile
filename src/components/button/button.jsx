import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

export default function Button(props){

    function testCliick(){

        Alert.alert("Login feito.");

    }

    return(

        <TouchableOpacity onPress={testCliick} style={styles.button}>

            <Text style={styles.text}>
            {props.text}
            </Text>

        </TouchableOpacity>

    );

}