import { Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from "./tab-item.styles";

const TabItem = ({
  icon,
  label,
  selected,
  onPress
}) => (
  <Pressable
    style={styles.container}
    onPress={onPress}
  >
    <Icon
      name={icon}
      size={25}
      color={selected ? '#489969' : '#495057'}
    />

    <Text style={selected
      ? [styles.label, styles.labelHighlight]
      : [styles.label]

    }>
      {label}
    </Text>
  </Pressable>
)

export default TabItem



