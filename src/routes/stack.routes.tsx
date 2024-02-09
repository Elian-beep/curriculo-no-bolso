import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { List } from "../pages/List";
import { CreateCv } from "../pages/CreateCv";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="list"
                    component={List}
                />
                <Stack.Screen
                    name="createCv"
                    component={CreateCv}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

