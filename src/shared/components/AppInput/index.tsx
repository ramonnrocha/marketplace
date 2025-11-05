import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { AppInputVariantsProps, appInputVariants } from "./input.variants";
import { useAppInputViewModel } from "./useAppInputViewModel";

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
  error?: string;
}

export const AppInput: FC<AppInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  mask,
  value,
  secureTextEntry,
  onBlur,
  onFocus,
  onChangeText,
  error,
  isDisabled,
  ...textInputProps
}) => {
  const {
    getIconColor,
    handleWrapperPress,
    handlePasswordToggle,
    handleFocus,
    handleBlur,
    isFocused,
    handleTextChange,
    showPassword,
  } = useAppInputViewModel({
    isError: !!error,
    secureTextEntry,
    onFocus,
    onBlur,
    mask,
    onChangeText,
    value,
  });
  const styles = appInputVariants({ isFocused, isError: !!error, isDisabled });

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        <Ionicons
          color={getIconColor()}
          className="mr-3"
          size={22}
          name={leftIcon}
        />

        <TextInput
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={styles.input()}
          onChangeText={handleTextChange}
          value={value}
          secureTextEntry={secureTextEntry && !showPassword}
          {...textInputProps}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={handlePasswordToggle}>
            <Ionicons
              color={getIconColor()}
              size={22}
              name={showPassword ? "eye-off-outline" : "eye-outline"}
            />
          </TouchableOpacity>
        )}
      </Pressable>

      {error && (
        <Text className={styles.error()}>
          <Ionicons className="ml-2" name="alert-circle-outline" /> {error}
        </Text>
      )}
    </View>
  );
};
