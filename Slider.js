import React, { useState } from "react";

import { View, Text, StyleSheet } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

const Slider = () => {
    // const [imageset, setImageset] = useState([])
    const imageset = (["https://images.unsplash.com/photo-1620766165457-a8025baa82e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwb2YlMjBpbmRpYXxlbnwwfHwwfHw%3D&w=1000&q=80",
        "https://thumbs.dreamstime.com/b/lakeside-nature-walk-way-photograph-showing-beautiful-curving-wooden-board-walkway-tropical-park-natural-style-34127577.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
        "https://wallpapercave.com/wp/wp2568543.jpg",])
    return (
        <SliderBox images={imageset}
            autoplay={true}
            circleLoop={true} />

    )
}

const styles = StyleSheet.create({});

export default Slider;