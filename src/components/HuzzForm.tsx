import React, { useState } from "react";
import { Box, Typography, Card, TextField, Button } from "@mui/material";

export const HuzzForm = () => {
    const [huzz, setHuzz] = useState('');
    const [huzzedWord, setHuzzedWored] = useState('');
    
    const handleSubmit = () => {
        let newWord;

        if (/girl/i.test(huzz)) {
            newWord = 'huzz'
        }
        else {
            newWord = huzz.slice(0, -1) + "uzz";
        }
        console.log('new word', newWord)
        setHuzzedWored(newWord);
    }
    console.log(huzzedWord)
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Card
                    variant="outlined"
                    sx={{
                        padding: 5,
                        boxShadow: 1,
                        borderRadius: 2,
                    }}
                >
                    <Box
                        sx={{
                        display: 'flex',
                        flexDirection: 'column'
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2}}>Huzz Converter</Typography>
                        <TextField 
                            onChange={(e) => setHuzz(e.target.value)} 
                            label='To be Huzzed' 
                            sx={{ marginBottom: 2}}
                        />
                        <Button variant="contained" onClick={handleSubmit}>Huzzify</Button>
                    </Box>
                    <h1 style={{ color: 'black'}}>{huzzedWord}</h1>
                </Card>
            </Box>
        </React.Fragment>
    )
}