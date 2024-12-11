// import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
// import React, { useRef } from 'react'
// import ActionSheet, {useScrollHandlers} from "react-native-actions-sheet";
// import {NativeViewGestureHandler} from 'react-native-gesture-handler';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// const ActionSheets = () => {
//     const actionSheetRef = useRef(null);
//     const handlers = useScrollHandlers();
//     const insets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       {/* <Text>ActionSheet</Text> */}
//       <View style={{marginTop: 60}}>
//       <Button title="Show ActionSheet" onPress={() => actionSheetRef.current.show()} />
//       </View>
//       <ActionSheet ref={actionSheetRef}
//         // closable={false}
//         containerStyle={{height: 400}}
//         gestureEnabled
//         // backgroundInteractionEnabled={true}
//         // isModal={false}
//         initialSnapIndex={1}
//         snapPoints={[30, 100]}
//         indicatorStyle={{
//             width: 100,
//             backgroundColor: '#747474'
//           }}
//         //   drawUnderStatusBar={false}
//         // useBottomSafeAreaPadding 
//         safeAreaInsets={insets}
//       >
//       <Text>Hi, I am here.</Text>
//       {/* <ScrollView {...handlers}></ScrollView> */}
//         <NativeViewGestureHandler
//         simultaneousHandlers={handlers.simultaneousHandlers}>
//         <ScrollView {...handlers} horizontal 
//         style={{ backgroundColor: '#f57272', marginTop: -100, position: 'absolute'}}>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//         </ScrollView>
//       </NativeViewGestureHandler>
//       {/* <Button title='click' onPress={() => actionSheetRef.current?.snapToIndex(2)}/> */}
//         <TextInput placeholder='Write here' style={{width: '100%'}}/>
//         <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//             <Text>Hi, I am here.</Text>
//     </ActionSheet>
//     </View>
//   )
// }

// export default ActionSheets

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     }
// })











import { Button, StyleSheet, Text, View, ScrollView, TextInput, StatusBar } from 'react-native'
import React, { useEffect, useRef } from 'react'
import ActionSheet, {useScrollHandlers} from "react-native-actions-sheet";
import {NativeViewGestureHandler} from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { useSharedValue, useAnimatedStyle,   
 withSpring } from 'react-native-reanimated';   


const ActionSheets = () => {
    const actionSheetRef = useRef(null);
    const handlers = useScrollHandlers();
    const insets = useSafeAreaInsets();

    useEffect(() => {
        // actionSheetRef.current.show()
    
    }, [])
    

  return (
    <View style={styles.container}>
      {/* <Text>ActionSheet</Text> */}
      <StatusBar barStyle={'dark-content'}/>
      <View style={{marginTop: 60}}>
      <Button title="Show ActionSheet" onPress={() => actionSheetRef.current.show()} />
      </View>
      <ActionSheet 
        // closable={false}
        containerStyle={{height: 400, borderWidth: 2, borderColor: '#e8e8e8', elevation: 15}}
        gestureEnabled
        backgroundInteractionEnabled={true}
        isModal={false}
        initialSnapIndex={1}
        snapPoints={[30, 100]}
        indicatorStyle={{
            width: 100,
            backgroundColor: '#747474'
          }}
        //   drawUnderStatusBar={false}
        // useBottomSafeAreaPadding 
        safeAreaInsets={insets}
        // closeOnTouchBackdrop={false}
        ref={actionSheetRef}>
      <Text>Hi, I am here.</Text>
    </ActionSheet>
    </View>
  )
}

export default ActionSheets

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

