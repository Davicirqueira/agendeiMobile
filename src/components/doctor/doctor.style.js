import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {

    doctor: {

        flex: 1,
        backgoundColor: COLORS.white,
        padding: 8,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.gray4,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 6

    },
    
    icon: {

        with: 60,
        height: 60,
        marginRight: 8

    },

    name: {

        fontSize: FONT_SIZE.medium,
        color: COLORS.gray1,
        marginTop: 5

    },

    specialty: {

        fontSize: FONT_SIZE.small,
        color: COLORS.gray3,

    }

}