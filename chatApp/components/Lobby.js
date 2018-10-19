import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Fire from '../Fire';

type Props = {
  name?: string,
};

class Lobby extends React.Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Lobbies',
  });

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
  }

  state = {
    pass: '',
  }

  onPress = () =>
    this.props.navigation.navigate('Chat', {name: 'Lucas'});

  render(){
    return(
      <View>
      <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
    }
}
const offset = 24;
const styles = StyleSheet.create({
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});

export default Lobby
