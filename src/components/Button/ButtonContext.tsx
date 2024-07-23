import { createContext } from 'react'

import { Variants } from './ButtonVariants'

export const ThemeButtonContext = createContext<{ variant?: Variants }>({})
