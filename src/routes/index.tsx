import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { Button, Text } from "react-native";
import { useAppContext } from "../../contexts/AppContext";
import { TabBar } from "../components/TabBar";

export const Routes = () => {
    const { sharedData } = useAppContext();
    return (
        <NavigationContainer>
            <StackRoutes />
            <TabBar />
            <Button title="cv" onPress={() => sharedData.navigate("createCv")} />
            <Button title="lista" onPress={() => sharedData.navigate("list")} />
        </NavigationContainer>
    )
}