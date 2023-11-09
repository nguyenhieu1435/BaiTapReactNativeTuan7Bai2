import { View, Text, StatusBar, SafeAreaView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function ProductDetail({navigation, route}) {
    const {product} = route.params;
    const [quantity, setQuantity] = useState(1);
  return (
    <View style={{flex: 1}}> 
        <StatusBar/>
        <SafeAreaView style={{flex: 1, padding: 10}}>
            <View style={{flex: 1}}>
                <Image
                    source={{uri: product.largeImg}}
                    resizeMode='contain'
                    style={{width: "100%", height: "100%"}}
                />
            </View>
            <View style={{flex: 1}}>
                <Text style={{fontWeight: "500", fontSize: 20}}>{product.name}</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 5, alignItems: "center"}}>
                    <Text style={{fontSize: 15}}>{product.desc}</Text>
                    <Text style={{fontSize: 20, fontWeight: "600"}}>${(product.price).toFixed(2)}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 30}}>
                    <View>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image 
                                source={require("../../assets/timer.png")}
                                resizeMode='contain'
                                style={{width: 20, height: 20, marginRight: 10}}
                            />
                            <Text style={{fontSize: 15, color: "#666"}}>Delivery in</Text>
                        </View>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>30 Min</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Pressable style={{alignItems: "center", justifyContent: "center"}}><Text 
                            style={{width: 21, height: 21, backgroundColor: "#F1B000", textAlign: "center", fontSize: 18, color: "#fff"}}
                        >-</Text></Pressable>
                        <Text style={{fontSize: 17, fontWeight: "600", marginHorizontal: 10}}>{quantity}</Text>
                        <Pressable style={{alignItems: "center", justifyContent: "center"}}><Text
                            style={{width: 21, height: 21, backgroundColor: "#F1B000", textAlign: "center", fontSize: 18, color: "#fff"}}
                        >+</Text></Pressable>
                    </View>
                  
                    
                </View>
                <View>
                        <Text style={{fontSize: 20, fontWeight: "600", marginBottom: 10}}>Restaurants info</Text>
                        <Text style={{fontSize: 14, color: "#666", marginBottom: 20}}>
Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
                    </View>
                <Pressable>
                        <Text style={{textAlign: "center", color: "#fff", fontSize: 25
                        , backgroundColor: "#F1B000", paddingVertical: 10, borderRadius: 4}}>Add to cart</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    </View>
  )
}