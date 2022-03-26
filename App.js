import React, { useRef, useState } from 'react'
import {View,Text,Button,ScrollView} from 'react-native'
import Downloader from './Downloader';
import HomeCarousel from './HomeCarousel ';
import Slider from './Slider';
function App() {
  return (
    <ScrollView>
      <View style={{flex:1,padding:10}}>
        {/* <HomeCarousel/> */}
{/* 
      <Slider/> */}
        <Downloader/>
        {/* <Text>HOC</Text> 
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} /> */}

    </View>
    </ScrollView>
  );
}
function HOCRed(props)
{
  return <Text style={{backgroundColor:'red'}}>Red<props.cmp /></Text>
}
function HOCGreen(props)
{
  return <Text style={{backgroundColor:'green'}}>Grren<props.cmp /></Text>
}
function HOCBlue(props)
{
  return <Text style={{backgroundColor:'blue'}}>blue <props.cmp /></Text>
}
function Counter()
{
  const [count,setCount]=useState(0)
  return<View style={{flex:1,height:100}}>
    <Text>{count}</Text>
    <Button onPress={()=>setCount(count+1)} title="Update"/>
  </View>
}

export default App;