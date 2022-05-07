import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import database from './database.json'
function MainContent() {
    return (
        <Box
            sx={{
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#F4F2F3',
                width: '100%',
                marginTop: '1%'
            }}
        >
            <Grid
                justifyContent="center"
                alignItems="center"
            >
                <Grid container textAlign='center' height='99%' backgroundColor='#94A7AE' direction="row" padding="1%" >
                    <Grid item width='33%'>
                        {database.top.map((Top, index) => (
                            <Grid height='700px' key={index} >
                                <Grid height='40%' borderBottom='1px solid black' backgroundColor='#ffffff' borderRadius='4% 4% 0 0'  >
                                    <img src={Top.picture} alt="Avatar" style={{ border: '2px solid white', borderRadius: '50%', height: '30%', position: 'relative', top: '-10%' }} />
                                    <Typography variant="h5" style={{ color: '#545454' }}>{Top.name.first} {Top.name.last}</Typography>
                                    <Typography style={{ color: '#979797' }}>{Top.company}</Typography>
                                    <Typography style={{ color: '#979797' }}>{Top.address}</Typography>
                                    <button style={{ borderRadius: '50%', height: '40px', marginRight: '10px', marginTop: '10px', color: '#c9d5d8', border: "2px solid #c9d5d8" }} >
                                        <PhoneIcon />
                                    </button>
                                    <button style={{ borderRadius: '50%', height: '40px', color: '#c9d5d8', border: "2px solid #c9d5d8" }} >
                                        <MailIcon />
                                    </button>
                                </Grid>
                                <Grid height='50%' backgroundColor='#f7fbfc' borderRadius='0 0 4% 4%' justifyContent="left" alignItems="left" padding='20px'>

                                    <Grid height='95%'>
                                        <Typography style={{ color: '#979797', textAlign: 'left' }}>About</Typography>
                                        <Typography style={{ color: '#545454', textAlign: 'left' }}>{Top.about}</Typography>
                                    </Grid>
                                    <Grid height='5%' >
                                        <Typography style={{ color: '#979797', textAlign: 'right' }}>Registered on {Top.registered}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                        )
                        }
                    </Grid>

                    <Grid item width='33%' marginTop={(database.top.length * 680) + "px"} style={{ position: 'relative', left: "-20vh" }}>
                        {database.middle.map((middle, index2) => (
                            <Grid height='700px' key={index2} >
                                <Grid height='40%' borderBottom='1px solid black' backgroundColor='#ffffff' borderRadius='4% 4% 0 0'  >
                                    <img src={middle.picture} alt="Avatar" style={{ border: '2px solid white', borderRadius: '50%', height: '30%', position: 'relative', top: '-10%' }} />
                                    <Typography variant="h5" style={{ color: '#545454' }}>{middle.name.first} {middle.name.last}</Typography>
                                    <Typography style={{ color: '#979797' }}>{middle.company}</Typography>
                                    <Typography style={{ color: '#979797' }}>{middle.address}</Typography>
                                    <button style={{ borderRadius: '50%', height: '40px', marginRight: '10px', marginTop: '10px', color: '#c9d5d8', border: "2px solid #c9d5d8" }} >
                                        <PhoneIcon />
                                    </button>
                                    <button style={{ borderRadius: '50%', height: '40px', color: '#c9d5d8', border: "2px solid #c9d5d8" }} >
                                        <MailIcon />
                                    </button>
                                </Grid>
                                <Grid height='50%' backgroundColor='#f7fbfc' borderRadius='0 0 4% 4%' justifyContent="left" alignItems="left" padding='20px'>

                                    <Grid height='95%'>
                                        <Typography style={{ color: '#979797', textAlign: 'left' }}>About</Typography>
                                        <Typography style={{ color: '#545454', textAlign: 'left' }}>{middle.about}</Typography>
                                    </Grid>
                                    <Grid height='5%' >
                                        <Typography style={{ color: '#979797', textAlign: 'right' }}>Registered on {middle.registered}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                        )
                        }
                    </Grid>

                    <Grid item width='33%' marginTop={(database.middle.length * 680 + database.top.length * 680) + "px"} style={{ position: 'relative', left: "-40vh" }}>
                        {database.bottom.map((bottom, index3) => (
                            <Grid height='700px' key={index3} >
                                <Grid height='40%' borderBottom='1px solid black' backgroundColor='#ffffff' borderRadius='4% 4% 0 0'  >
                                    <img src={bottom.picture} alt="Avatar" style={{ border: '2px solid white', borderRadius: '50%', height: '30%', position: 'relative', top: '-10%' }} />
                                    <Typography variant="h5" style={{ color: '#545454' }}>{bottom.name.first} {bottom.name.last}</Typography>
                                    <Typography style={{ color: '#979797' }}>{bottom.company}</Typography>
                                    <Typography style={{ color: '#979797' }}>{bottom.address}</Typography>
                                    <button style={{ borderRadius: '50%', height: '40px', marginRight: '10px', marginTop: '10px', color: '#c9d5d8', border: "2px solid #c9d5d8" }} >
                                        <PhoneIcon />
                                    </button>
                                    <button style={{ borderRadius: '50%', height: '40px', color: '#c9d5d8', border: "2px solid #c9d5d8" }} >
                                        <MailIcon />
                                    </button>
                                </Grid>
                                <Grid height='50%' backgroundColor='#f7fbfc' borderRadius='0 0 4% 4%' justifyContent="left" alignItems="left" padding='20px'>

                                    <Grid height='95%'>
                                        <Typography style={{ color: '#979797', textAlign: 'left' }}>About</Typography>
                                        <Typography style={{ color: '#545454', textAlign: 'left' }}>{bottom.about}</Typography>
                                    </Grid>
                                    <Grid height='5%' >
                                        <Typography style={{ color: '#979797', textAlign: 'right' }}>Registered on {bottom.registered}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                        )
                        }
                    </Grid>

                </Grid>


            </Grid>

        </Box>


    )
}
export default MainContent