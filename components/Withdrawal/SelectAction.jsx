import { Pressable, View, Text } from "react-native";
import { PersonAddIcon, PersonSettingsIcon } from "@/components/Icons";

const SelectAction = ({ handleAction, withdrawAction }) => {
    return (
        <View className="p-8 pt-0">
            <Pressable onPress={() => handleAction("current")} className="h-20">
                <View
                    className={`h-20 px-4 bg-zinc-100 flex-row justify-between items-center border rounded-xl ${
                        withdrawAction === "current"
                            ? "border-sky-600"
                            : "border-zinc-200"
                    }`}
                >
                    <View className="flex-row items-center gap-x-3">
                        <View className="w-14 h-14 rounded-full bg-zinc-200 flex-row items-center justify-center">
                            <PersonSettingsIcon
                                width={24}
                                height={24}
                                color="#3f3f46"
                            />
                        </View>
                        <Text className="text-zinc-600 text-sm">
                            Use Existing Account
                        </Text>
                    </View>
                    <View className="w-10 h-full flex-row items-center justify-center">
                        <View
                            className={`h-5 w-5 bg-white rounded-full
                                    ${
                                        withdrawAction === "current"
                                            ? "border border-sky-700 bg-sky-700"
                                            : ""
                                    }
                            `}
                        ></View>
                    </View>
                </View>
            </Pressable>

            <Pressable
                onPress={() => handleAction("new")}
                className="h-20 flex"
            >
                <View
                    className={`h-20 px-4 mt-3 bg-zinc-100 flex-row justify-between items-center border rounded-xl ${
                        withdrawAction === "new"
                            ? "border-sky-600"
                            : "border-zinc-200"
                    }`}
                >
                    <View className="flex-row items-center gap-x-3">
                        <View className="w-14 h-14 rounded-full bg-zinc-200 flex-row items-center justify-center">
                            <PersonAddIcon
                                width={24}
                                height={24}
                                color="#3f3f46"
                            />
                        </View>
                        <Text className="text-zinc-600 text-sm">
                            Use New Account
                        </Text>
                    </View>
                    <View className="w-10 h-full flex-row items-center justify-center">
                        <View
                            className={`h-5 w-5 bg-white rounded-full
                                    ${
                                        withdrawAction === "new"
                                            ? "border border-sky-700 bg-sky-700"
                                            : ""
                                    }
                            `}
                        ></View>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

export default SelectAction;
