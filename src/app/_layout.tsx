/* eslint-disable camelcase */
import { StatusBar, View } from 'react-native'
import { Slot } from 'expo-router'
import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    useFonts,
} from '@expo-google-fonts/inter'

import '@/styles/global.css'
import { Loading } from '@/components/Loading'

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_500Medium,
        Inter_400Regular,
    })

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <View className="flex-1 bg-zinc-950">
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Slot />
        </View>
    )
}
