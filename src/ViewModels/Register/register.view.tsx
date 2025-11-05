import { FC, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { userRegisterModel } from "./register.model";
import { AppInput } from "../../shared/components/AppInput";
import { Controller } from "react-hook-form";
import { AppInputController } from "../../shared/components/AppInputController";

export const RegisterView: FC<ReturnType<typeof userRegisterModel>> = ({
  onSubmit,
  control,
  errors,
}) => {
  return (
    <View className="flex-1 items-center justify-center m-safe p-4 bg-background">
      <AppInputController
        control={control}
        name="email"
        errors={errors}
        leftIcon="mail-outline"
        label="E-MAIL"
      />
      <AppInputController
        control={control}
        name="password"
        errors={errors}
        leftIcon="lock-closed-outline"
        secureTextEntry
      />
      <TouchableOpacity
        className="bg-purple-base px-4 py-3 rounded-lg mt-6 w-full items-center"
        onPress={onSubmit}>
        <Text className="text-white">Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
