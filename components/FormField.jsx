import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle,
  ...props
}) => {
  const [showPassord, setShowPassord] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-psemibold">{title}</Text>

      <View className="w-full bg-black-100 h-16 rounded-2xl border-2 border-black-200 px-4 focus:border-secondary flex flex-row items-center">
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          className="flex-1 text-base text-white font-psemibold"
          secureTextEntry={title === "Password" && !showPassord}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassord(!showPassord)}>
            <Image
              source={showPassord ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
