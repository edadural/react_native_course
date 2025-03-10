import { View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle,
  ...props
}) => {
  const [showPassord, setShowPassord] = useState(false);
  return (
    <View className="w-full bg-black-100 h-16 rounded-2xl border-2 border-black-200 px-4 focus:border-secondary flex flex-row items-center space-x-4">
      <TextInput
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor={"#7b7b8b"}
        onChangeText={handleChangeText}
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        secureTextEntry={title === "Password" && !showPassord}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
