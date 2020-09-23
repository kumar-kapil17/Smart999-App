import React, { Component } from 'react'
import { View, Text, Image, } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Contact Dermatitis','Latex Allergy','Allergic Asthma','Anaphylaxis','Sinus','Eczema','Mold Allergy' ]
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

const renderLabel = (label, style) => {
  return (
    <View>
      {/* <Image style={{width: 42, height: 42}} source={{uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S'}} /> */}
      <View style={{marginLeft: 10,flexDirection:'row'}}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  )
}

export default class MultiSelect extends Component {
  state = { selectedFruits: [] }

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }

  render () {
    return (
      <View >
        <SelectMultiple
          horizontal = {true}
          items={fruits}
          renderLabel={renderLabel}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange} />
      </View>
    )
  }
}