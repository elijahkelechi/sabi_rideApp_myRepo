import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import * as Location from "expo-location";

export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const truncateString = (str, num) => {
  if (!str) return "";
  if (str.length <= num) return str;
  return str.slice(0, num) + "...";
};

export const convertImageToBase64 = async (imagePath) => {
  const asset = Asset.fromModule(imagePath);
  await asset.downloadAsync();
  const base64 = await FileSystem.readAsStringAsync(asset.localUri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  return base64;
};

export const GetLocation = async (setmyLocation) => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    alert("Permission to access location was denied");
  }
  let { coords } = await Location.getCurrentPositionAsync();
  if (coords) {
    const { latitude, longitude } = coords;
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    for (let item of response) {
      let address = ` ${item.street}, ${item.city}`;
      setmyLocation(address);
    }
  }
};
