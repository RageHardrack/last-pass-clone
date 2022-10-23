const useGeneratePassword = () => {
  const BASE_CHARS: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const SPECIAL_CHARS: string = "!@#$%^&*()";
  const NUMERIC_CHARS: string = "0123456789";

  const newPassword = useState<string>("newPassword", () => "");

  const generateNewPassword = ({
    allowSpecialChars,
    allowNumericChars,
    passwordLength,
  }) => {
    const chars = computed(
      () =>
        `${BASE_CHARS}${allowSpecialChars.value ? SPECIAL_CHARS : ""}${
          allowNumericChars.value ? NUMERIC_CHARS : ""
        }`
    );

    newPassword.value = Array.from({ length: passwordLength.value })
      .map(() =>
        chars.value.charAt(Math.floor(Math.random() * chars.value.length))
      )
      .join("");

    return Array.from({ length: passwordLength.value })
      .map(() =>
        chars.value.charAt(Math.floor(Math.random() * chars.value.length))
      )
      .join("");
  };

  const updateNewPassword = (newValue: string) =>
    (newPassword.value = newValue);

  return {
    newPassword,
    generateNewPassword,
    updateNewPassword
  };
};

export default useGeneratePassword;
