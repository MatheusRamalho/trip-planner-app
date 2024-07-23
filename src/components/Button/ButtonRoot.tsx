import clsx from 'clsx'
import {
    ActivityIndicator,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native'

import { ThemeButtonContext } from './ButtonContext'
import { Variants } from './ButtonVariants'

interface ButtonRootProps extends TouchableOpacityProps {
    variant?: Variants
    isLoading?: boolean
}

export function ButtonRoot({
    variant = 'primary',
    isLoading = false,
    children,
    ...rest
}: ButtonRootProps) {
    return (
        <TouchableOpacity
            className={clsx(
                'w-full h-14 rounded-lg flex-row items-center justify-center gap-2',
                {
                    'bg-lime-300': variant === 'primary',
                    'bg-zinc-800': variant === 'secondary',
                },
            )}
            activeOpacity={0.7}
            disabled={isLoading}
            {...rest}
        >
            <ThemeButtonContext.Provider value={{ variant }}>
                {isLoading ? (
                    <ActivityIndicator className="text-lime-950" />
                ) : (
                    children
                )}
            </ThemeButtonContext.Provider>
        </TouchableOpacity>
    )
}
