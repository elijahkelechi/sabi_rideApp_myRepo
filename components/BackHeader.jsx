import { Text, TouchableOpacity, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const BackHeader = ({
  name = null,
  textColor = "#000000",
  bgColor = "white",
  link = "/",
  addMargin = true,
  className = "",
}) => {
  return (
    <View
      className={`absolute top-0 w-full ${
        addMargin ? "mt-14" : ""
      } px-4 ${className}`}
    >
      <StatusBar barStyle={"light-content"} />
      <View className={`flex-row items-center`}>
        <Link href={link} asChild>
          <TouchableOpacity className="bg-white rounded-full p-2 w-14 h-14 shadow-md items-center justify-center">
            <MaterialCommunityIcons
              name="chevron-left"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </Link>
        {name && (
          <View className="mx-auto">
            <Text
              style={{ color: textColor }}
              className="font-baloo-600 text-center -ml-12 text-2xl"
            >
              {name}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default BackHeader;
