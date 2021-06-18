import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

const Home = () => <Text>Home</Text>;

const Sysco = () => <Text>Sysco</Text>;

const UsFood = () => <Text>US Foods</Text>;

const Settings = () => <Text>Settings</Text>;

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "sysco", title: "Sysco", icon: "food" },
    { key: "usFood", title: "US Foods", icon: "food" },
    { key: "settings", title: "Settings", icon: "cog" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    sysco: Sysco,
    usFood: UsFood,
    settings: Settings,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default App;
