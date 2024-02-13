import { Alert } from "react-native";

const alertUnavailable = () => {
    Alert.alert(
        "Em construção",
        "Funcionalidade indisponível"
    );
}

export { alertUnavailable }