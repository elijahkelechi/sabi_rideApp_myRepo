import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { CardIcon, WalletIcon } from "@/components/Icons";
import { formatNumber } from "@/constants/functions";

const PaymentMethod = () => {
  const balance = 1000;
  return (
    <View className="bg-white flex-1 px-4">
      <View className="pt-32 gap-4">
        <Link href={"/"} asChild>
          <TouchableOpacity className="p-2 rounded-full justify-between pr-4 bg-zinc-100 flex-row items-center">
            <View className="flex-row items-center gap-x-3">
              <View className="w-14 h-14 rounded-full bg-zinc-200 flex-row items-center justify-center">
                <CardIcon width={24} height={24} color="#3f3f46" />
              </View>
              <Text className="text-zinc-600 text-lg font-[Baloo-2-400]">
                Card
              </Text>
            </View>
            <View className="gap-x-2 flex-row items-center justify-center">
              <View className="w-5 h-5 rounded border border-zinc-600 flex-row items-center justify-center">
                <MaterialCommunityIcons
                  name="plus"
                  size={20}
                  color={"#52525b"}
                />
              </View>
              <Text className="text-zinc-600 font-[Baloo-2-400]">Add Card</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <Link href={"./Wallet"} asChild>
          <TouchableOpacity className="p-2 rounded-full justify-between pr-4 bg-zinc-100 flex-row items-center">
            <View className="flex-row items-center gap-x-3">
              <View className="w-14 h-14 rounded-full bg-zinc-200 flex-row items-center justify-center">
                <WalletIcon width={24} height={24} color="#3f3f46" />
              </View>
              <Text className="text-zinc-600 text-lg font-[Baloo-2-400]">
                E-Wallet
              </Text>
            </View>
            <View className="gap-x-2 flex-row items-center justify-center">
              <Text className="text-zinc-600 text-lg font-[Baloo-2-400]">
                ₦{formatNumber(balance)}
              </Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default PaymentMethod;
