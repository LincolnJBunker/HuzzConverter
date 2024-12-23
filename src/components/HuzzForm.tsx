import React, { useState } from "react";
import { Box, Typography, Card, TextField, Button } from "@mui/material";
// import {Client as GenderApiClient, ResultSingleName} from "gender-api.com-client";

export const HuzzForm = () => {
    const [huzz, setHuzz] = useState('');
    const [huzzedWord, setHuzzedWored] = useState('');
    const [gender, setGender] = useState('');
    const [accuracy, setAccuracy] = useState('')

    const key = import.meta.env.VITE_GENDER_API_KEY;
    
    // const genderApiClient = new GenderApiClient(key || '');

    const handleGenderApi = async (name: string) => {
        try {
            const response = await fetch(`https://gender-api.com/get?name=${name}&key=${key}`);
            const data = await response.json();
            console.log('data', data);
            setGender(data.gender);
            console.log('gender!', gender)
            setAccuracy(data.accuracy);
        } catch (error) {
            console.error('Error fetching gender data:', error);
        }
    };
    
    const handleSubmit = async () => {
        let newWord;

        if (/girl/i.test(huzz)) {
            newWord = 'huzz'
        } else if (gender === 'female') {
            newWord = 'huzz'
        } else {
            newWord = huzz.slice(0, -1) + "uzz";
        }
        setHuzzedWored(newWord);

        await handleGenderApi(huzz);

    }
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