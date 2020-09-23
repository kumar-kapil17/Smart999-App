import React, { useState } from "react";
import { View, Picker, StyleSheet,Thumbnail,Text,Image } from "react-native";

const FlagPicker = () => {
  const [selectedValue, setSelectedValue] = useState("ko");
 
  return (
    <View style={styles.container}>
      <Picker
        mode= {"dropdown"}
        selectedValue={selectedValue}
        style={{ height: 50, width:83, }}
        
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="🇰🇷" value="ko" />
        <Picker.Item label="🇫🇷  " value="fr" /> 
        
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

export default FlagPicker;
