import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width:'100%' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Gaelic" value="Gaelic" />
        <Picker.Item label="German" value="German" />
        <Picker.Item label="French" value="French" />
        <Picker.Item label="Italian" value="Italian" />
        <Picker.Item label="Spanish" value="Spanish" />
        <Picker.Item label="Polish" value="Polish" />
        <Picker.Item label="Romanian" value="Romanian" />
        <Picker.Item label="Russian" value="Russian" />
        <Picker.Item label="Czech" value="Czech" />
        
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    alignItems: "flex-start",
    justifyContent:'flex-start',
    marginLeft:15,
  }
});

export default App;
