import { useEffect, useState } from 'react'
import { View, Text, StatusBar, SafeAreaView, TextInput, Pressable, FlatList, Image } from 'react-native'



export default function ProductList({navigation}) {
    const [textInput, setTextInput] = useState("");
    const [data, setData] = useState([]);

    const [types, setTypes] = useState(()=>{
        let arr = [];
        data && data.forEach((item, index)=>{
            if (!arr.includes(item.type)){
                arr.push(item.type);
            }
        })
        return arr;
    })
    
    const [typeSelected, setTypeSelected] = useState("Donut"); 

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch(`https://n38s2n-3000.csb.app/${typeSelected}`)
            let data = await res.json();
           
            setData(data);
            setTypesList(data);
        } 
        fetchData();
    }, [typeSelected])
    
    function setTypesList(data){
        let arr = [];
        data && data.forEach((item, index)=>{
            if (!arr.includes(item.type)){
                arr.push(item.type);
            }
        })
        setTypes(arr);
    }

    function renderProductItem(item, index){
      
        return (
            <Pressable style={{flex: 1, flexDirection: "row", marginVertical: 5, backgroundColor: "#F4DDDD"
            , borderRadius: 12, paddingVertical: 5}}
                onPress={()=>navigation.navigate("ProductDetail", {product: item})}
            >
                <View style={{flex: 1, justifyContent: "center",  alignItems :"center"}}>
                    <Image
                        source={{uri: item.smallImg}}
                        resizeMode='contain'
                        style={{width: "70%", height: "90%", borderRadius: 20}}
                    />
                </View>
                <View style={{flex: 2}}>
                    <Text style={{fontSize: 20, fontWeight: "600", marginBottom: 8}}>{item.name}</Text>
                    <Text style={{fontSize: 15, color: "#666"}}>{item.desc}</Text>
                    <Text style={{fontSize: 20, fontWeight: "600", marginTop: 5}}>${(item.price).toFixed(2)}</Text>
                </View>
            </Pressable>
        )
    }
    function handleGetData(){
        let newArr = data
        if (textInput){
            newArr = newArr.filter((item, index)=> item.name.toLowerCase().includes(textInput.toLowerCase()));
        }
        return newArr;
    }

  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}> 
        <StatusBar/>
        <SafeAreaView style={{flex: 1, padding: 10}}
        >
            <Text style={{fontSize: 16, color: "#666"}}>Welcome, Jala!</Text>
            <Text style={{marginVertical: 5, fontWeight: "500", fontSize: 20}}>Choice you Best Food</Text>
            <TextInput
                value={textInput}
                onChangeText={setTextInput}
                placeholder='Search food'
                style={{backgroundColor: "#c4c4c4", paddingVertical: 10, paddingHorizontal: 10, width: "70%", marginVertical: 10}}
                placeholderTextColor={"#666"}
            />
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            
                <Pressable
                    onPress={()=>setTypeSelected("Donut")}
                >
                    <Text style={{paddingVertical: 4, paddingHorizontal: 20
                        , borderWidth: 1, borderColor: "#ccc", backgroundColor: typeSelected == "Donut" ? "#F1B000" : "#f2f2f2"
                        , fontWeight: "500"}}>Donut</Text>
                </Pressable>
                <Pressable
                    onPress={()=>setTypeSelected("Floating")}
                >
                    <Text style={{paddingVertical: 4, paddingHorizontal: 20
                        , borderWidth: 1, borderColor: "#ccc", backgroundColor: typeSelected == "Floating" ? "#F1B000" : "#f2f2f2"
                        , fontWeight: "500"}}>Floating</Text>
                </Pressable>
                <Pressable
                    onPress={()=>setTypeSelected("Pink_donut")}
                >
                    <Text style={{paddingVertical: 4, paddingHorizontal: 20
                        , borderWidth: 1, borderColor: "#ccc", backgroundColor: typeSelected == "Pink_donut" ? "#F1B000" : "#f2f2f2"
                        , fontWeight: "500"}}>Pink_donut</Text>
                </Pressable>

            </View>
            <FlatList
                style={{marginTop: 30}}
                data={handleGetData()}
                keyExtractor={(item, index)=> index+""}
                renderItem={({item, index})=> renderProductItem(item, index)}
            />
        </SafeAreaView>
        
    </View>
  )
}