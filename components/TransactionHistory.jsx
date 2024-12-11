import React from "react";
import { View, Text, FlatList } from "react-native";
import { CarIcon } from "./Icons";
import { FontAwesome6 } from "@expo/vector-icons";

const Icon = ({ type }) => {
    return (
        {
            ride: <CarIcon width={24} height={24} color="white" />,
            deposit: (
                <FontAwesome6
                    name="arrow-right"
                    size={20}
                    color="#fff"
                    style={{
                        transform: [
                            {
                                rotate: "135deg",
                            },
                        ],
                    }}
                />
            ),
            withdrawal: (
                <FontAwesome6
                    name="arrow-right"
                    size={20}
                    color="#fff"
                    style={{
                        transform: [
                            {
                                rotate: "-45deg",
                            },
                        ],
                    }}
                />
            ),
        }[type] || null
    );
};

const renderItem = ({ item: history }) => (
    <View className="flex-row items-center justify-between gap-x-2 py-4 border-b border-zinc-200 rounded-xl">
        <View className="flex-row items-center gap-x-2">
            <View className="h-10 w-10 rounded-full bg-sky-200 justify-center items-center">
                <Icon type={history.type} />
            </View>
            <View>
                <Text className="text-zinc-800 font-baloo-600 text-lg">
                    {history.description}
                </Text>
                <Text className="text-zinc-500 font-baloo-400">
                    {history.date} | {history.time}
                </Text>
            </View>
        </View>
        <Text
            className={`${
                history.type === "withdrawal"
                    ? "text-red-500"
                    : "text-green-500"
            } font-baloo-600 text-lg`}
        >
            {history.type === "withdrawal" ? "-" : "+"} N{history.amount}
        </Text>
    </View>
);
export default function TransactionHistory({ histories }) {
    return (
        <FlatList
            data={histories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingTop: 16 }}
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
        />
    );
}
