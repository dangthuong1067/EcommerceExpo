import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Tab from './src/components/tab/tab.component';
import Home from './src/screens/home/home.component';
import Cart from './src/screens/cart/cart.component';
import FavoriteProduct from './src/screens/favorite-product/favorite-product.component';
import Profile from './src/screens/profile/profile.component';
import Category from './src/screens/category/category.component';
import Chat from './src/screens/chat/chat.component';
import Login from './src/screens/login/login.component';
import Register from './src/screens/register/register.component';
import ForgotPassword from './src/screens/forgot-password/forgot-password.component';
import store from './src/redux/store';
import SplashScreen from './src/screens/splash-screen/splashScreen.component';
import { logoutThunk } from './src/redux/auth/auth.slice';
import { inject } from './src/helpers/api';
import ProductDetail from './src/screens/product-detail/product-detail.component';
import ChoosePhoneAttributes from './src/screens/choose-phone-attributes/choose-phone-attributes.component';

inject(store, logoutThunk);

const Stack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function AppDrawerStack() {
  return (
    <DrawerStack.Navigator
      screenOptions={{ headerShown: false, swipeEnabled: false }}
      drawerContent={props => <DrawerView {...props} />}>
      <DrawerStack.Screen name='AppBottomStack' component={AppBottomStack} />
      <DrawerStack.Screen name='ProductDetail' component={ProductDetail} />
      <DrawerStack.Screen name='ChoosePhoneAttributes' component={ChoosePhoneAttributes} />
    </DrawerStack.Navigator>
  )
}

function DrawerView() {
  return (
    <View>
      <Text> Drawer View </Text>
    </View>
  )
}

function AppBottomStack() {
  return (
    <BottomTab.Navigator
      tabBar={props => <Tab {...props} />}
      screenOptions={{ headerShown: false, }}
    >
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{ icon: 'home-outline', tabBarLabel: 'Trang chủ' }}
      />
      <BottomTab.Screen
        name='Category'
        component={Category}
        options={{ icon: 'copy-outline', tabBarLabel: 'Danh mục' }}
      />

      <BottomTab.Screen
        name='Cart'
        component={Cart}
        options={{ icon: 'cart-outline', tabBarLabel: 'Giỏ hàng' }}
      />
      <BottomTab.Screen
        name='Fovorite'
        component={FavoriteProduct}
        options={{ icon: 'heart-outline', tabBarLabel: 'Yêu thích' }}
      />
      <BottomTab.Screen
        name='Chat'
        component={Chat}
        options={{ icon: 'chatbox-outline' }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{ icon: 'person-outline' }}
      />
    </BottomTab.Navigator>
  )
}

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
    <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
  </Stack.Navigator>
)

const ProtectedStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="AppDrawerStack" component={AppDrawerStack} />
  </Stack.Navigator>
)

const Navigation = () => {
  const test = null
  const { stack } = useSelector(state => state.app);
  let rendering = null;

  switch (stack) {
    case 'init':
      rendering = <SplashScreen />
      break;
    case 'auth':
      rendering = <AuthStack />
      break;
    case 'protected':
      rendering = <ProtectedStack />
      break;
    default:
      rendering = null;
      break;
  }
  return (
    <NavigationContainer>
      {rendering}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

