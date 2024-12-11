import { FlashList } from "@shopify/flash-list";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { transactionData } from "../External/sub/SearchRequest/index";
import TransactionCard from "../External/sub/SearchRequest/SRtwo";

export default function SearchRequest() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
      <FlashList
        //   horizontal
        data={transactionData}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
        //   contentContainerStyle={{paddingBottom: 100}}
        removeClippedSubviews={false}
        height={"100%"}
        renderItem={({ item }) => <TransactionCard {...item} />}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={200}
        contentContainerStyle={{ paddingTop: 10 }}
        // ItemSeparatorComponent={() => <View style={{marginBottom: 10}}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    // paddingTop: '10'
  },
});
