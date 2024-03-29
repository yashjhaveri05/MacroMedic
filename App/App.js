import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, StyleSheet, Text, View } from "react-native";
import Login from "./Screens/Authentication/Login";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import Appointments from "./Screens/Appointments";
import Doctors from "./Screens/Doctors";
import Scheduled from "./Screens/Scheduled";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PRIMARY } from "./Utils/colors";
import theme from "./Components/theme";
import DrawerContent from "./Components/DrawerContent";
import { GlobalProvider } from "./GlobalContext";
import Signup from "./Screens/Authentication/Signup";
import DoctorProfile from "./Screens/DoctorProfile";
import BookAppointment from "./Screens/BookAppointment";
import Meeting from "./Screens/Meeting";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { width: 250 },
        drawerType: "back",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Ionicons
              style={{ marginLeft: 15 }}
              name="ios-menu-outline"
              size={27}
              color={theme.COLORS.MUTED}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.removeItem("Macromedic_user");
              navigation.navigate("Login");
            }}
          >
            <MaterialIcons
              style={{ marginRight: 15 }}
              name="logout"
              size={27}
              color={theme.COLORS.MUTED}
            />
          </TouchableOpacity>
        ),
        drawerActiveTintColor: PRIMARY,
      }}
    >
      <Drawer.Screen
        options={{
          headerTitle: "Dashboard",
          drawerIcon: ({ focused }) => (
            <MaterialIcons
              // style={{ marginLeft: 15 }}
              name="dashboard"
              size={25}
              color={"white"}
            />
          ),
          drawerLabel: "Dashboard",
          drawerLabelStyle: { color: "white" },
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 20,
          },
        }}
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <Feather name="user" size={25} color={"white"} />
          ),
          drawerLabel: "User Profile",
          drawerLabelStyle: { color: "white" },
          headerTitle: "User Profile",
          headerTitleStyle: { fontWeight: "normal", fontSize: 20 },
        }}
        name="Profile"
        component={Profile}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialIcons name="assignment" size={25} color={"white"} />
          ),
          headerTitleStyle: { fontWeight: "normal", fontSize: 20 },
          drawerLabelStyle: { color: "white" },
        }}
        name="Appointments"
        component={Appointments}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <Ionicons name="videocam" size={25} color={"white"} />
          ),
          headerTitleStyle: { fontWeight: "normal", fontSize: 20 },
          drawerLabelStyle: { color: "white" },
        }}
        name="Scheduled"
        component={Scheduled}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialIcons name="person-search" size={25} color={"white"} />
          ),
          headerTitleStyle: { fontWeight: "normal", fontSize: 20 },
          drawerLabelStyle: { color: "white" },
        }}
        name="Doctors"
        component={Doctors}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialIcons name="person-search" size={25} color={"white"} />
          ),
          headerTitleStyle: { fontWeight: "normal", fontSize: 20 },
          drawerLabelStyle: { color: "white" },
        }}
        name="Meeting"
        component={Meeting}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Dashboard"
            component={Dashboard}
          />
          <Stack.Screen
            options={{
              headerTitle: "Doctor Profile",
              headerTintColor: "#9c27b0",
            }}
            name="DoctorProfile"
            component={DoctorProfile}
          />
          <Stack.Screen name="BookAppointment" component={BookAppointment} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
