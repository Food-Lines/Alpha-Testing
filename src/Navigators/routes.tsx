import { createStackNavigator } from '@react-navigation/stack'
import CardItemDetails from '../Pages/CardItemDetail'

export enum MainRoutes {
  SplashScreen = 'Splash Screen',
  SignIn = 'Sign In',
  SignUp = 'Sign Up',
  Welcome = 'Welcome',
  Home = 'Home',
  ConfirmEmail = 'Confirm Email',
  OTP = 'OTP',
  ResetPassword = 'Reset Password',
  Confirmation = 'Confirmation',
  Profile = 'Profile',
  NavBar = 'NavBar',
  Sysco = 'Sysco',
  UsFoods = 'UsFoods',
  EditProfile = 'Edit Profile',
  CardListScreen = 'Card List',
  CardItemDetails = 'Card Item Details',
  NewUserWelcome = 'New User Welcome',
  FoodAccounts = 'Food Account',
  Favorites = 'Favorites',
  Support = 'Support',
}

export type MainStackParamList = {
  [MainRoutes.SplashScreen]: undefined
  [MainRoutes.SignIn]: undefined
  [MainRoutes.SignUp]: undefined
  [MainRoutes.Welcome]: undefined
  [MainRoutes.Home]: { update: boolean } | undefined // just an example, "update" will later be used for version checks
  [MainRoutes.ConfirmEmail]: undefined
  [MainRoutes.OTP]: undefined
  [MainRoutes.ResetPassword]: undefined
  [MainRoutes.Confirmation]: undefined
  [MainRoutes.Profile]: undefined
  [MainRoutes.NavBar]: undefined
  [MainRoutes.Sysco]: undefined
  [MainRoutes.UsFoods]: undefined
  [MainRoutes.EditProfile]: undefined
  [MainRoutes.CardListScreen]: undefined
  [MainRoutes.CardItemDetails]: undefined
  [MainRoutes.NewUserWelcome]: undefined
  [MainRoutes.FoodAccounts]: undefined
  [MainRoutes.Favorites]: undefined
  [MainRoutes.Support]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()
