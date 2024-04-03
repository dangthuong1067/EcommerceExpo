import { View } from "react-native";
import styles from "./tab.styles";
import TabItem from "./tab-item/tab-item.component";

const Tab = ({
  state,
  descriptors,
  navigation
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((item, index) => {
        const { options } = descriptors[item.key]
        let label;
        if (options.tabBarLabel !== undefined) {
          label = options.tabBarLabel
        } else if (options.title !== undefined) {
          label = options.title
        } else {
          label = item.name
        }

        const selected = state.index === index
        const onPress = () => {
          if (selected === false) {
            navigation.navigate({ name: item.name, merge: true })
          }
        }

        return (
          <TabItem
            key={item.name}
            selected={selected}
            icon={options.icon}
            label={label}
            onPress={onPress}
          />
        )
      })}
    </View>
  )
}

export default Tab

