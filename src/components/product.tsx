import {forwardRef} from 'react'
import { 
    TouchableOpacity, 
    TouchableOpacityProps, 
    Image, 
    ImageProps, 
    View, 
    Text } from "react-native";

type ProductDataProps = {
    title: string
    description: string
    thumbnail: ImageProps
}

type ProductProps = TouchableOpacityProps & {
    data: ProductDataProps
}

export const Product= forwardRef<TouchableOpacity, ProductProps> (({data, ...rest}, ref) => {
    return(
        <TouchableOpacity 
            ref={ref} 
            className=" mb-1 w-full flex-row itens-center pb-4"
            {...rest}
            >
            <Image source={data.thumbnail} className="w-20 h-20 rounded-md"/>

            <View className="flex-1 ml-3">
                <Text className="text-red-600 font-subtitle text-base flex-1">
                    {data.title} 
                </Text>
                <Text className="text-slate-100 text-xs leading-5 mt-0.5">
                    {data.description} 
                </Text>

            </View>

        </TouchableOpacity>
    )
})