import { View, Text } from "react-native";
import { WithdrawalIcon } from "../Icons";

const options = {
    weekday: "long",

    month: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
};

const date = new Date();
const formattedDate = date.toLocaleString("en-US", options);

const Successfull = () => {
    return (
        <View className="justify-center items-center pb-4">
            <View className="bg-green-600/80 w-14 h-14 rounded-full items-center justify-center">
                <WithdrawalIcon width={35} height={35} color="white" />
            </View>
            <View className="items-center">
                <Text className="text-zinc-800 text-2xl font-[Baloo-2-600] mt-2">
                    Withdrawal Successful
                </Text>
                <Text className="text-zinc-800 text-base font-[Baloo-2-400]">
                    {formattedDate}
                </Text>
                <Text className="text-red-500 text-2xl font-[Baloo-2-600]">
                    - NGN 1000
                </Text>
            </View>
        </View>
    );
};

export default Successfull;
