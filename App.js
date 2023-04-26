import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import {useState} from 'react'; // Definición de variables de estado (state)

const estudiantes=[];

export default function App() {
  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [asignatura, setAsignatura] = useState('')
  const [notaUno, setnotaUno] = useState('')
  const [notaDos, setnotaDos] = useState('')
  const [notaTres, setnotaTres] = useState('')
  const [definitiva, setDefinitiva] = useState('')
  const [observacion, setObservacion] = useState('')
  const [estudiantes, setEstudiantes] = useState([])
// Funcion de guardar notas

let guardarNotas = () =>{
  const estudiante = {
    id: id,
    nombre: nombre,
    asignatura: asignatura,
    notaUno: notaUno,
    notaDos: notaDos,
    notaTres: notaTres,
    definitiva: definitiva,
    observacion: observacion
  }
    //setEstudiantes([...estudiantes, estudiante])
    estudiantes.push(estudiante);
    alert("El estudiante se guardo correctamente")
  }

// Funcion de mostrar notas

  let mostrarNotas =() => {
    if ( id != "" && nombre != "" && asignatura !="" && notaUno != "" && notaDos!="" && notaTres!="") {
      if(notaUno >=0 && notaUno <= 5 && notaDos >= 0 && notaDos<= 5 && notaTres>= 0 && notaTres <=5){
        let definitiva = parseFloat(notaUno) + parseFloat(notaDos) + parseFloat(notaTres);
        let promedio = parseFloat(definitiva) /3 ;
        setDefinitiva(`La nota definitiva es de:  ${promedio.toFixed(2)}`)
        if(promedio >= 2.99 && promedio <=5){
        setObservacion("El estudiante ha aprobado");
      } else if(promedio >= 1.99 && promedio <=3){
        setObservacion("El estudiante queda habilitando")
        }
        else {
        setObservacion("El estudiante ha reproado, debe repetir")
      }
    } else { alert("las notas solamente pueden ser de 0 a 5") }
  }

    else {
      alert("Ingrese por favor los campos para ingresar notas del estudiante.")
    }
  }

// Funcion de buscar notas

let buscarNotas = () => {
  setObservacion.value = observacion;
  if (id !== "") {
    const estudianteEncontrado = estudiantes.find(estudiante => estudiante.id === id)
    if (estudianteEncontrado) {
      setNombre(estudianteEncontrado.nombre)
      setAsignatura(estudianteEncontrado.asignatura)
      setnotaUno(estudianteEncontrado.notaUno)
      setnotaDos(estudianteEncontrado.notaDos)
      setnotaTres(estudianteEncontrado.notaTres)
      setDefinitiva(estudianteEncontrado.definitiva)
      setObservacion(estudianteEncontrado.observacion)
    } else {
      alert('No se encontró al estudiante.')
    }
  } else {
    alert('Ingrese por favor el ID del estudiante para buscarlo.')
  }
}

  // Funcion de limpiar notas
 
  let Limpiar= () =>{ // Limpiar el conteido de las variables
    setId('');
    setNombre('');
    setAsignatura('');
    setnotaUno('');
    setnotaDos('');
    setnotaTres('');
    setDefinitiva('');
    setObservacion('');
  }

  return (
      <View style={[styles.container]}>
        <Text style={{color:'black', fontSize: '28px', fontWeight: 'bold', fontFamily: 'monospace',  letterSpacing: '2px', borderRadius:12, backgroundColor:'cian', width: '30%', height:'4%', textAlign:'center',shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.8,shadowRadius: 20, elevation:1,}}>Sistema de notas</Text>
      <View style={styles.secondaryContainer}>
        <TextInput
          placeholder='Ingrese Identificación'
          style={styles.inputs}
          onChangeText={id => setId(id)}
          value={id}
        />
      
        <TextInput
          placeholder='Ingrese Nombres'
          style={styles.inputs}
          onChangeText={nombre => setNombre(nombre)}
          value={nombre}
        />
        <TextInput
          placeholder='Ingrese Asignatura'
          style={styles.inputs}
          onChangeText={asignatura => setAsignatura(asignatura)}
          value={asignatura}
        />
        <TextInput
          placeholder='Ingrese Nota Momento 1 (30%)'
          style={styles.inputs}
           onChangeText={notaUno => setnotaUno(notaUno)}
          value={notaUno}
        />
        <TextInput
          placeholder='Ingrese Nota Momento 2 (35%)'
          style={styles.inputs}
           onChangeText={notaDos => setnotaDos(notaDos)}
           value={notaDos}
        />
        <TextInput
          placeholder='Ingrese Nota Momento 3 (35%)'
          style={styles.inputs}
           onChangeText={notaTres => setnotaTres(notaTres)}
           value={notaTres}
        />
        <TextInput
          placeholder='Definitiva: '
          style={styles.inputs}
           onChangeText={definitiva => setDefinitiva(definitiva)}
           value={definitiva}
        />
        <TextInput
          placeholder='Observación: '
          style={styles.inputs}
           onChangeText={observacion => setObservacion(observacion)}
           value={observacion}
        />
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={guardarNotas}>
          <Text>Guardar notas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={mostrarNotas}>
          <Text>Mostrar/Calcular notas del estudiante</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={buscarNotas}>
          <Text>Buscar notas del estudiante</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Limpiar}>
          <Text>Limpiar campos</Text>
        </TouchableOpacity>
      </View>
        <view style={{flexDirection: 'row', marginTop:30}}>
          
        </view>
        <StatusBar style="auto"/>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#cce3de',
    justifyContent:'center',
    alignItems:'center'
  },
  secondaryContainer: {
   flex:1,
   backgroundColor: '#a4c3b2',
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.8,
   shadowRadius: 20,
   elevation: 1,
   width: '30%',
   height:'75%',
   borderRadius: 20,
   marginTop: 11,
   justifyContent: 'center',
   alignItems: 'center',
  },
  inputs:{
    width:'75%',
    fontSize:'17px',
    fontFamily: 'Helvetica',
    letterSpacing: '1px',
    color:'black',
    alignSelf: 'center',
    textAlign:'center',
    padding:20,
    textDecorationLine: 'underline',
    paddingTop:6,
    marginTop: 6,
    marginBottom: 4
}, 
  button: {
      flex: 1,
      textAlign:'center',
      width:'12rem',
      backgroundColor: '#eaf4f4',
      borderRadius: 10,
      padding: 9,
      position: 'relative',
      marginTop: 4,
      marginBottom: 3    
  }

})