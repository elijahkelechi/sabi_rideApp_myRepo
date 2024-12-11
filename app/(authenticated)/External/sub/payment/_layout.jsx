import { Stack } from "expo-router";
import React from "react";
import BackHeader from "@/components/BackHeader";
import AnotherHeader from "../../../../../components/AnotherHeader";

const PaymentLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => (
            <BackHeader
              name={"Payment Method"}
              color={"#ffffff"}
              tColor={"#000000"}
              cColor={"#ffffff"}
              link={"/(authenticated)/External/sub/menu/Profile"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Wallet"
        options={{
          header: () => (
            <AnotherHeader
              name={"E-Wallet"}
              color={"#ffffff"}
              tColor={"#000000"}
              cColor={"#ffffff"}
              link={"/(authenticated)/External/sub/menu/Profile"}
            />
          ),
        }}
      />
    </Stack>
  );
};

export default PaymentLayout;
