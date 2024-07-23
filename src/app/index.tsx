import { useState } from 'react'
import { View, Text, Image } from 'react-native'
import {
    MapPin,
    Calendar as CalendarIcon,
    Settings2,
    UserRoundPlus,
    ArrowRight,
} from 'lucide-react-native'

import { colors } from '@/styles/colors'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

enum StepForm {
    TRIP_DETAILS = 1,
    ADD_EMAIL = 2,
}

export default function Index() {
    const [stepForm, setStepForm] = useState<StepForm>(StepForm.TRIP_DETAILS)

    function handleNextStepForm() {
        if (stepForm === StepForm.TRIP_DETAILS) {
            return setStepForm(StepForm.ADD_EMAIL)
        }
    }

    function handlePreviousStepForm() {
        setStepForm(StepForm.TRIP_DETAILS)
    }

    return (
        <View className="flex-1 items-center justify-center gap-3 px-5">
            <Image
                source={require('@/assets/logo.png')}
                alt="Trip planner logo"
                resizeMode="contain"
                className="h-8"
            />

            <Image
                source={require('@/assets/bg.png')}
                alt="Backgorund quadriculado"
                resizeMode="contain"
                className="absolute"
            />

            <Text className="text-zinc-400 font-regular text-center text-lg">
                Convide seus amigos e planeje sua{'\n'}próxima viagem
            </Text>

            <View className="w-full bg-zinc-900 p-4 rounded-xl my-8 border border-zinc-800 gap-2">
                <Input.Root variant="tertiary">
                    <MapPin color={colors.zinc[400]} size={20} />

                    <Input.Field
                        placeholder="Para onde?"
                        editable={stepForm === StepForm.TRIP_DETAILS}
                    />
                </Input.Root>

                <Input.Root variant="tertiary">
                    <CalendarIcon color={colors.zinc[400]} size={20} />

                    <Input.Field
                        placeholder="Quando?"
                        editable={stepForm === StepForm.TRIP_DETAILS}
                    />
                </Input.Root>

                {stepForm === StepForm.ADD_EMAIL && (
                    <>
                        <View className="border-b border-zinc-800 py-3">
                            <Button.Root
                                variant="secondary"
                                onPress={handlePreviousStepForm}
                            >
                                <Button.Title>Alterar local/data</Button.Title>

                                <Settings2 color={colors.zinc[400]} size={20} />
                            </Button.Root>
                        </View>

                        <Input.Root variant="tertiary">
                            <UserRoundPlus color={colors.zinc[400]} size={20} />

                            <Input.Field placeholder="Quem estará na viagem?" />
                        </Input.Root>
                    </>
                )}

                <Button.Root onPress={handleNextStepForm}>
                    <Button.Title>
                        {stepForm === StepForm.TRIP_DETAILS
                            ? 'Continuar'
                            : 'Confirmar viagem'}
                    </Button.Title>

                    <ArrowRight color={colors.lime[950]} size={20} />
                </Button.Root>
            </View>

            <Text className="text-zinc-500 font-regular text-center text-base">
                Ao planejar sua viagem pela planne.er você automaticamente
                concorda com nossos{' '}
                <Text className="text-zinc-300 underline">
                    termos de uso e políticas de privacidade.
                </Text>
            </Text>
        </View>
    )
}
