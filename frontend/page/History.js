import React,{useState} from 'react';
import {View,
        Text,
        StyleSheet,
        ScrollView,
    } from 'react-native';
import TopNav from '../components/topNav';
import BottomNav from '../components/BottomNav';
import {CheckBox} from "react-native-paper";

const History =()=>{
    const [checked, setChecked]= React.useState(false);
    return(
        <View style={styles.container}>
            <TopNav/>
             <ScrollView>
                {/* title */}
                <Text style={styles.historyTitle}>History Records</Text>
                {/* box for history records*/}
                <View style={styles.formBox}>
                    {/* gender text and box */}
                    <Text style={styles.inputText}>Gender:</Text>
                    <View style={styles.box}>
                        <Text style={styles.inputText}>Female</Text>
                    </View>
                    {/* Allergies text and box */}
                    <Text style={styles.inputText}>Allergy:</Text>
                    <View style={styles.box}>
                        <Text style={styles.inputText}>Dust, Dust mites</Text>
                    </View>
                    {/* Vaccination text and box */}
                    <Text style={styles.inputText}>Recent vaccination:</Text>
                    <View style={styles.boxVaccination}>
                        <Text style={styles.inputText}>06/01/2022- Pfizer/Comirnaty Covid-19 Booster</Text>
                        <Text style={styles.inputText}>06/12/2021- Gardasil</Text>
                        <Text style={styles.inputText}>06/06/2021- Gardasil</Text>
                    </View>
                    {/* Illness or chronic disease text and check box*/}
                    <Text style={styles.illnessText}>Have you suffered or suffering from any illness from the list below?</Text>
                        <CheckBox 
                         status={checked? 'checked':'unchecked'} onPress={()=>{setChecked(!checked)}}/>
                            <Text style={styles.inputText}>Arthritis</Text>

                        <CheckBox 
                        status={checked? 'checked':'unchecked'} onPress={()=>{setChecked(!checked)}}/>
                            <Text style={styles.inputText}>Cancer</Text>

                        <CheckBox 
                         status={checked? 'checked':'unchecked'} onPress={()=>{setChecked(!checked)}}/>
                            <Text style={styles.inputText}>Chickenpox</Text>

                        <CheckBox 
                        status={checked? 'checked':'unchecked'} onPress={()=>{setChecked(!checked)}}/>
                            <Text style={styles.inputText}>Diabetes</Text>

                        <CheckBox 
                         status={checked? 'checked':'unchecked'} onPress={()=>{setChecked(!checked)}}/>
                            <Text style={styles.inputText}>Dengue Fever</Text>

                        <CheckBox 
                         status={checked? 'checked':'unchecked'} onPress={()=>{setChecked(!checked)}}/>
                            <Text style={styles.inputText}>Heart Disease</Text>

                        <CheckBox 
                         status={checked? 'checked':'unchecked'} onPress={()=>{setChecked(!checked)}}/>
                        <Text style={styles.inputText}>High Blood Pressure</Text>

                        <CheckBox 
                         status={checked? 'checked':'unchecked'} onPress={()=>{setChecked(!checked)}}/>
                            <Text style={styles.inputText}>Thyroid disorders</Text>

                        <CheckBox 
                         status={checked? 'checked':'unchecked'} onPress={()=>{setChecked(!checked)}}/>
                            <Text style={styles.inputText}>None</Text>
                    {/* Medication text and box */}
                    <Text style={styles.inputText}>Medication followed:</Text>
                    <View style={styles.box}>
                        <Text style={styles.inputText}>Cetrizine</Text>
                    </View>
                </View>
            </ScrollView> 
          <BottomNav/>
        </View>

    );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FEA3AA",
    },
    historyTitle:{
        fontFamily:'Monospace',
        fontSize:32,
        color:"#000000",
        marginLeft:70,
        paddingTop:30,
        paddingBottom:30,

    },
    formBox:{
        flex:1,
        borderRadius:20,
        backgroundColor:"#FFFFFF",
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        width:"95%",
        height:"100%",
    },
    box:{
        borderWidth:1,
        borderColor:'#000000',
        height:40,
        width:"85%",
        padding:8,
        margin:10,
    },
    boxVaccination:{
        borderWidth:1,
        borderColor:'#000000',
        height:150,
        width:"85%",
        padding:8,
        margin:10,
    },
      checkBox:{
        width:"10%",
        height:30,
      },
    inputText:{
        fontFamily:'Monospace',
        fontSize:22,
        color:"#000000",
    },
    illnessText:{
        fontFamily:'Monospace',
        fontSize:22,
        color:"#000000",
        marginLeft:30,
    },
})
export default History;