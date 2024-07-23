import { ReactNode } from 'react'
import { View } from 'react-native'
import clsx from 'clsx'

type Variants = 'primary' | 'secondary' | 'tertiary'

interface InputRootProps {
    children?: ReactNode
    variant?: Variants
}

export function InputRoot({ children, variant = 'primary' }: InputRootProps) {
    return (
        <View
            className={clsx('min-w-full h-16 flex-row items-center gap-3', {
                'h-14 px-4 rounded-lg border border-zinc-800':
                    variant === 'primary',
                'bg-zinc-950': variant === 'secondary',
                'bg-zinc-900': variant === 'tertiary',
            })}
        >
            {children}
        </View>
    )
}
