import { useContext } from 'react'
import { Text, TextProps } from 'react-native'
import clsx from 'clsx'

import { ThemeButtonContext } from './ButtonContext'

export function ButtonTitle({ children }: TextProps) {
    const { variant } = useContext(ThemeButtonContext)

    return (
        <Text
            className={clsx('text-base font-semibold', {
                'text-lime-950': variant === 'primary',
                'text-zinc-200': variant === 'secondary',
            })}
        >
            {children}
        </Text>
    )
}
