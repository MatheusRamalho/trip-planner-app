import { Platform, TextInput, TextInputProps } from 'react-native'

import { colors } from '@/styles/colors'

export function InputField({ ...rest }: TextInputProps) {
    return (
        <TextInput
            className="flex-1 h-full text-zinc-100 text-lg font-regular rounded-lg"
            placeholderTextColor={colors.zinc[400]}
            cursorColor={colors.zinc[100]} // Mudando cor do cursor no android
            selectionColor={
                Platform.OS === 'ios' ? colors.zinc[100] : undefined
            } // Mudando cor do cursor no ios
            {...rest}
        />
    )
}
