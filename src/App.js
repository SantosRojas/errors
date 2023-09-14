
import { Button, Container, List, ListItem, TextField } from '@mui/material';
import { useState } from 'react';
import CodeErrors from "./data/codeErrors.json"

function App() {
  const [errorInput, setErrorInput] = useState("")
  const [code,setCode] = useState("")
  const [showInfo, setShowInfo] = useState(false)
  const [definition,setDefinition] =useState("")
  const [cause,setCause] = useState("")
  const [suggestion,setSuggestion] = useState("")

  const searchError = (e) => {
    const registro = CodeErrors.find(item => String(item.code) === errorInput)
    if (registro){
      setCode(registro.code)
      setDefinition(registro.definition)
      setCause(registro.cause)
      setSuggestion(registro.suggestion)
      setShowInfo(true)
    }
    else{
      alert("Codigo de error no registrado")
    }
    
  }

  const styleList = {borderBottom:"0.2rem solid gray",marginBottom:"10px", display:"flex",flexDirection:"column",alignItems:'flex-start'}

  return (
    <Container maxWidth='sm' style={{ display: "flex", flexDirection: "column", gap: "20px", height: "100vh", marginTop: "30px" }}>
      <TextField
        id='code'
        value={errorInput}
        onChange={(e) => setErrorInput(e.target.value)}
        variant="outlined"
        label="Codigo de error"
      />

      <Button
        variant='contained'
        onClick={searchError}>
        Search
      </Button>

      {
        showInfo ? (
          <List
            sx={{ borderRadius: "1rem", backgroundColor:"#D3D3D3 ", margin:"0 auto"}}>
            <ListItem style={styleList}> 
              <span style={{fontWeight:"bold"}}>Codigo: &nbsp; </span>
              <span>{code}</span>
            </ListItem>
            <ListItem style={styleList}>
              <span style={{fontWeight:"bold"}}>Descripción: &nbsp;</span> <span>{definition}</span>
            </ListItem>
            <ListItem style={styleList}>
              <span style={{fontWeight:"bold"}}>Causa:&nbsp; </span><span>{cause}</span>
            </ListItem>
            <ListItem style={styleList}>
              <span style={{fontWeight:"bold"}}>Recomendación: &nbsp;</span> <span>{suggestion}</span>
            </ListItem>

          </List>
        ) : <></>
      }
    </Container>
  );
}

export default App;
