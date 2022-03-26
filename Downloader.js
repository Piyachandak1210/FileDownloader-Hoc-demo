import React from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image, PermissionsAndroid ,Platform} from 'react-native';
import RNFetchBlob from "rn-fetch-blob";

const Downloader = () => {
    const IMAGE_PATH = 'https://www.naturaltendency.ca/wp-content/uploads/2017/08/Banner-1.jpg'

const checkpermission = async () =>{
    if(Platform.OS==='ios'){
        downloadImage()
    }else{
        try {
            const granted =await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{
                    title: 'Storage Permission required',
                    message: 'App needs access to your storage to download image '
                }
            )
                if(granted === PermissionsAndroid.RESULTS.GRANTED){
                    console.log('storage permission granted.')
                    downloadImage()
                }else{
                    alert('Storage Permission not granted.')
                }

        } catch (error) {
           console.warn(error) 
        }
    }
}

const downloadImage = ()=>{

    let date = new Date()
    let image_URL = IMAGE_PATH
    let ext =getExtension(image_URL) 
    ext = '.' +ext[0]
    const {config, fs} = RNFetchBlob
    let Picturedir = fs.dirs.PictureDir
    let options= {
        fileCache: true,
        addAndroidDownloads :{
            useDownloadManager : true,
            notification :true,
            path : Picturedir + '/image_'+
            Math.floor(date.getTime()+ date.getSeconds() /2 ) + ext,
            description : 'Image'
        }
    }
    config(options)
    .fetch('GET',image_URL)
    .then( res=>{
        console.log ('res ->',JSON.stringify(res))
        alert ('Image downloaded successfully.')
    } )
}
const getExtension = filename =>{
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined
}
    return (
        <View style={{ flex: 1 }}>
            <Image
             source={{uri: IMAGE_PATH}}
             style={styles.image}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={checkpermission}>
                <Text style={styles.text}>
                    Download Image
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: 'orange'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    image:{
        width:'100%',
        height:250,
        resizeMode:'contain',
        margin:5
    }
});

export default Downloader;