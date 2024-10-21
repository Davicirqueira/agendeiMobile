import { Text, View } from "react-native";
import { styles } from "./appointment.style.js";

export default function Appointment(props){

    return(

        <View style={styles.appointment}>

            <Text style={styles.name}>{props.service} - {props.doctor}</Text>
            <Text style={styles.specialty}>{props.specialty}</Text>

        </View>

    );

}