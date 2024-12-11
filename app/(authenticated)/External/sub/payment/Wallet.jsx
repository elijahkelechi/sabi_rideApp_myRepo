import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { useRef, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import TransactionHistory from "@/components/TransactionHistory";
import WithdrawalSheet from "@/components/Sheets/WithdrawalSheet";

const sampleTransactions = [
  {
    id: "1",
    type: "ride",
    description: "Ride to Work",
    date: "2024-03-15",
    time: "08:30 AM",
    amount: 1500,
    status: "cancelled",
  },
  {
    id: "2",
    type: "deposit",
    description: "Add Funds",
    date: "2024-03-14",
    time: "02:15 PM",
    amount: 5000,
    status: "cancelled",
  },
  {
    id: "3",
    type: "withdrawal",
    description: "ATM Withdrawal",
    date: "2024-03-13",
    time: "11:45 AM",
    amount: 2000,
    status: "cancelled",
  },
  {
    id: "4",
    type: "ride",
    description: "Airport Transfer",
    date: "2024-03-12",
    time: "06:20 AM",
    amount: 3500,
    status: "cancelled",
  },
  {
    id: "5",
    type: "deposit",
    description: "Salary Credit",
    date: "2024-03-10",
    time: "09:00 AM",
    amount: 50000,
    status: "successful",
  },
  {
    id: "6",
    type: "withdrawal",
    description: "Online Purchase",
    date: "2024-03-09",
    time: "03:30 PM",
    amount: 7500,
    status: "pending",
  },
  {
    id: "7",
    type: "ride",
    description: "Evening Commute",
    date: "2024-03-08",
    time: "07:15 PM",
    amount: 1200,
    status: "completed",
  },
  {
    id: "8",
    type: "deposit",
    description: "Refund",
    date: "2024-03-07",
    time: "10:45 AM",
    amount: 3000,
    status: "pending",
  },
  {
    id: "9",
    type: "ride",
    description: "Weekend Trip",
    date: "2024-03-06",
    time: "11:30 AM",
    amount: 2500,
    status: "completed",
  },
  {
    id: "10",
    type: "withdrawal",
    description: "Bill Payment",
    date: "2024-03-05",
    time: "04:00 PM",
    amount: 10000,
    status: "completed",
  },
];

export default function Wallet() {
  const withdrawalPopup = useRef(null);
  const [withdrawalForm, setWithdrawalForm] = useState({
    accountNumber: "",
    accountName: "",
    bankName: "",
  });

  const handleWithdraw = () => {
    if (validateForm()) {
      setbtnText(() => {
        return (
          <View className="flex-row h-8 items-center gap-x-2 justify-center">
            <ActivityIndicator color={"#fff"} size={"small"} />
            <Text className="text-white">Withdrawing...</Text>
          </View>
        );
      });
      setStep(1);

      setTimeout(() => {
        setbtnText("Done");
        setStep(4);
      }, 4000);
    }
  };

  return (
    <View className="p-4 flex-1  bg-white">
      <View className="bg-primary p-4 rounded-xl">
        <Text className="text-white text-center font-[Baloo-2400] text-lg">
          Balance
        </Text>
        <Text className="text-white pt-4 text-center font-[Baloo-2-600] text-4xl">
          ₦ 1,000
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 20,
            marginTop: 20,
          }}
        >
          <TouchableOpacity className="w-full flex-1 bg-white/20 backdrop-blur-md h-16 rounded-xl -z-10 flex-row items-center justify-center">
            <View className="w-8 h-8 items-center justify-center bg-white/20 rounded-full mr-2">
              <FontAwesome6 name="plus" size={20} color="#fff" />
            </View>
            <Text className="text-white text-center font-[Baloo-2-400] text-lg">
              Top Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              withdrawalPopup.current?.show();
            }}
            className="w-full flex-1 bg-white/20 backdrop-blur-md h-16 rounded-xl -z-10 flex-row items-center justify-center"
          >
            <View className="w-8 h-8 items-center justify-center bg-white/20 rounded-full mr-2">
              <FontAwesome6
                name="arrow-right"
                size={20}
                color="#fff"
                style={{
                  transform: [{ rotate: "-45deg" }],
                }}
              />
            </View>
            <Text className="text-white text-center font-[Baloo-2-400] text-lg">
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-1">
        <Text className="font-[Baloo-2-500] text-2xl mt-5">
          Transactions from Wallet
        </Text>
        <TransactionHistory histories={sampleTransactions} />
      </View>
      <WithdrawalSheet
        withdrawalSheef={withdrawalPopup}
        handleWithdraw={handleWithdraw}
        withdrawalForm={withdrawalForm}
        setWithdrawalForm={setWithdrawalForm}
      />
    </View>
  );
}
