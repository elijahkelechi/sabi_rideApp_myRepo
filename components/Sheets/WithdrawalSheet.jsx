import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import ActionSheet from "react-native-actions-sheet";
import SelectAction from "@/components/Withdrawal/SelectAction";
import GetAccountDetails from "@/components/Withdrawal/GetAccountDetails";
import Successfull from "@/components/Withdrawal/Successfull";
import { useState } from "react";

const WithdrawalSheet = ({
    withdrawalSheef,
    handleWithdraw,
    withdrawalForm,
    setWithdrawalForm,
}) => {
    const [withdrawAction, setWithdrawAction] = useState("current");
    const [step, setStep] = useState(1);
    const [btnText, setbtnText] = useState("Withdraw");

    const [formErrors, setFormErrors] = useState({
        accountNumber: "",
        accountName: "",
        bankName: "",
    });
    const handleAction = (action) => {
        setWithdrawAction(action);
        if (action === "current") {
            setbtnText("Withdraw");
        } else {
            setbtnText("Next");
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;
        setFormErrors({});

        if (!withdrawalForm.accountNumber.trim()) {
            errors.accountNumber = "Account number is required";
            isValid = false;
        }
        if (isNaN(withdrawalForm.accountNumber)) {
            errors.accountNumber = "Account number must be a number";
            isValid = false;
        }
        if (withdrawalForm.accountNumber.length < 10) {
            errors.accountNumber = "Account number must be 10 digits";
            isValid = false;
        }

        if (!withdrawalForm.accountName.trim()) {
            errors.accountName = "Account name is required";
            isValid = false;
        }

        if (!withdrawalForm.bankName.trim()) {
            errors.bankName = "Bank name is required";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleOnPress = () => {
        if (validateForm()) {
            handleWithdraw();
        }
    };
    return (
        <ActionSheet
            gestureEnabled
            containerStyle={{
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                backgroundColor: "#fff",
            }}
            indicatorStyle={{
                height: 0,
            }}
            ref={withdrawalSheef}
        >
            <View
                className={`h-auto ${
                    step === 1 || step === 4
                        ? ""
                        : "bg-primary rounded-t-[30] -mt-3"
                }`}
            >
                <Text className="text-white text-center font-[Baloo-2-400] py-1 text-lg">
                    Make this details are correct
                </Text>
                <View
                    className={`h-auto ${
                        step === 1 || step === 4
                            ? ""
                            : "bg-white rounded-t-[30]"
                    }`}
                >
                    <View className="flex-auto">
                        {step === 1 ? (
                            <SelectAction
                                withdrawalSheef={withdrawalSheef}
                                handleAction={handleAction}
                                withdrawAction={withdrawAction}
                            />
                        ) : step === 4 ? (
                            <Successfull />
                        ) : (
                            <GetAccountDetails
                                formErrors={formErrors}
                                setFormErrors={setFormErrors}
                                withdrawalForm={withdrawalForm}
                                setWithdrawalForm={setWithdrawalForm}
                            />
                        )}
                    </View>
                    <View className="flex-auto mt-3">
                        <TouchableOpacity
                            className="bg-primary mx-auto min-w-[150px] p-3 rounded-xl shadow-sm"
                            onPress={
                                step === 2
                                    ? handleOnPress
                                    : step === 4
                                    ? () => {
                                          withdrawalSheef.current?.hide();
                                          setStep(1);
                                      }
                                    : () => setStep(step + 1)
                            }
                        >
                            {withdrawAction === "current" ? (
                                <View className="flex-row items-center justify-center">
                                    {btnText === "Withdraw" ? (
                                        <View className="w-8 h-8 items-center justify-center bg-white/20 rounded-full mr-2">
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
                                        </View>
                                    ) : (
                                        <></>
                                    )}
                                    <Text className="text-white pr-2 text-center font-[Baloo-2-600] text-lg">
                                        {btnText}
                                    </Text>
                                </View>
                            ) : (
                                <View className="flex-row items-center justify-center">
                                    {btnText === "Next" ? (
                                        <View className="w-8 h-8 items-center justify-center bg-white/20 rounded-full mr-2">
                                            <FontAwesome6
                                                name="arrow-right"
                                                size={20}
                                                color="#fff"
                                            />
                                        </View>
                                    ) : (
                                        <></>
                                    )}
                                    <Text className="text-white pr-2 text-center font-[Baloo-2-600] text-lg">
                                        {btnText}
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ActionSheet>
    );
};

export default WithdrawalSheet;
