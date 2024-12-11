import { Text, View, TextInput } from "react-native";
import React from "react";

const GetAccountDetails = ({
    formErrors,
    withdrawalForm,
    setWithdrawalForm,
}) => {
    return (
        <View className="p-5 py-8">
            <Text className="font-[Baloo-2-600] text-xl">
                Fill Account Details
            </Text>
            <View className="mt-4">
                <Text className="font-[Baloo-2-400] text-lg">
                    Bank account number
                </Text>
                <TextInput
                    className="h-14 rounded-xl bg-zinc-100 font-[Baloo-2-400] px-3"
                    placeholder="Bank account number"
                    placeholderTextColor="#64748b"
                    required
                    onChangeText={(text) => {
                        setWithdrawalForm({
                            ...withdrawalForm,
                            accountNumber: text,
                        });
                    }}
                    keyboardType="numeric"
                    maxLength={10}
                />
                {formErrors.accountNumber ? (
                    <Text className="text-red-500 text-sm font-[Baloo-2-400]">
                        {formErrors.accountNumber}
                    </Text>
                ) : null}
            </View>

            <View className="mt-4">
                <Text className="font-[Baloo-2-400] text-lg">Account name</Text>
                <TextInput
                    className="h-14 rounded-xl bg-zinc-100 font-[Baloo-2-400] px-3"
                    placeholder="Full name of account owner"
                    placeholderTextColor="#64748b"
                    required
                    onChangeText={(text) => {
                        setWithdrawalForm({
                            ...withdrawalForm,
                            accountName: text,
                        });
                    }}
                />
                {formErrors.accountName ? (
                    <Text className="text-red-500 text-sm font-[Baloo-2-400]">
                        {formErrors.accountName}
                    </Text>
                ) : null}
            </View>

            <View className="mt-4">
                <Text className="font-[Baloo-2-400] text-lg">Bank name</Text>
                <TextInput
                    className="h-14 rounded-xl bg-zinc-100 font-[Baloo-2-400] px-3"
                    placeholder="Specific bank name"
                    placeholderTextColor="#64748b"
                    required
                    onChangeText={(text) => {
                        setWithdrawalForm({
                            ...withdrawalForm,
                            bankName: text,
                        });
                    }}
                />
                {formErrors.bankName ? (
                    <Text className="text-red-500 text-sm font-[Baloo-2-400]">
                        {formErrors.bankName}
                    </Text>
                ) : null}
            </View>
        </View>
    );
}

export default GetAccountDetails;