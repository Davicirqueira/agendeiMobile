import { Image, TouchableOpacity, View } from "react-native";

export default function Doctor(props){

    return(

        <TouchableOpacity>

        <Image source={props.icon}/>

        </TouchableOpacity>

    );

}