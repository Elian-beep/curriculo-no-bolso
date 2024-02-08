import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { List } from "../pages/List";
import { CreateCv } from "../pages/CreateCv";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
    return(
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
    )
}

