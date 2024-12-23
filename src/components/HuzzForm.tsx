import React, { useState } from "react";
import { Box, 
        Typography, 
        Card, 
        TextField, 
        Button,
        LinearProgress,
    } from "@mui/material";
import huzzImg from '../../public/huzz.jpeg';

export const HuzzForm = () => {
    const [huzz, setHuzz] = useState('');
    const [huzzedWord, setHuzzedWord] = useState('');
    const [isHuzzing, setIsHuzzing] = useState(false);
    const [gender, setGender] = useState('');
    const [accuracy, setAccuracy] = useState('');

    const key = import.meta.env.VITE_GENDER_API_KEY;

    const handleGenderApi = async (name: string) => {
        try {
            setIsHuzzing(true);
            const response = await fetch(`https://gender-api.com/get?name=${name}&key=${key}`);
            const data = await response.json();
            console.log('data', data);
            setGender(data.gender);
            setAccuracy(data.accuracy);
            setIsHuzzing(false)
            return data.gender; // Return the gender for immediate use
        } catch (error) {
            console.error('Error fetching gender data:', error);
            setIsHuzzing(false);
            return null; // Return null if there's an error
        }
    };

    const handleSubmit = async () => {
        // Fetch gender first
        const detectedGender = await handleGenderApi(huzz);

        // Determine the new word
        let newWord;
        if (/girl/i.test(huzz)) {
            newWord = 'huzz';
        } else if (detectedGender === 'female') {
            newWord = 'huzz';
        } else if (detectedGender === 'male') {
            newWord = huzz.slice(0, -1) + "ruzz";
        } else {
            newWord = huzz.slice(0, -1) + "uzz";
        }

        // Update the state with the new word
        setHuzzedWord(newWord);
    };

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
                        // backgroundColor: '#ecf3fc'
                    }}
                >
                    <Box
                        sx={{
                        display: 'flex',
                        flexDirection: 'column'
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 'bold'}}>Huzz Converter</Typography>
                        <Typography sx={{ marginBottom: 2}}>Enter a word or name to see and see how it is huzz compatible</Typography>
                        <TextField 
                            onChange={(e) => setHuzz(e.target.value)} 
                            label='To be Huzzed' 
                            sx={{ marginBottom: 2}}
                        />
                        <Button variant="contained" onClick={handleSubmit}>Huzzify</Button>
                        {isHuzzing &&
                            <LinearProgress sx={{ marginBottom: 2, padding: 0.1, borderRadius: 0.75 }} color="inherit"/>
                        }
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignContent: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography variant='h6' sx={{ color: 'black'}}>Converted word: {huzzedWord}</Typography>
                        {huzzedWord === 'huzz' &&
                            <img src={huzzImg} alt="Huzz Image" />
                        }
                    </Box>
                </Card>
            </Box>
        </React.Fragment>
    );
};
