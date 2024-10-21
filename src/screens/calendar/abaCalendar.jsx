import { styles } from "./abaCalendar.style.js";
import icon from '../../constants/icon.js';
import { FlatList, Text, View } from "react-native";
import { appointments } from "../../constants/data.js";
import Appointment from "../../components/appointment/appointment.jsx";

export default function AbaCalendar(){

    return(

        <View style={styles.container}>

            <Text></Text>

            <FlatList data={appointments}
            keyExtractor={(appoint) => appoint.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {

                return(
                    
                   <Appointment service={item.service} doctor={item.doctor}
                   specialty={item.specialty}/>

                );

            }}/>

        </View>

    );

}