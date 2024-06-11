'use client'
import styled from '@emotion/styled'
import { Box, Drawer, Grid, IconButton, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { IconBurger, IconChevronDown } from '../../../public/icons/custom'
import { usePathname, useRouter } from 'next/navigation'
import { DrawerRoutes } from './DrawerRoutes'

const CardContainer = styled(Box)({
    background: 'rgb(66,66,74)',
    background: 'linear-gradient(180deg, rgba(66,66,74,1) 0%, rgba(25,25,25,1) 100%)',
    color: '#fff',
    padding: '18px',
    borderBottomRightRadius: '12px',
    height: '100%',
})

const ItemRoute = styled(Box)(({ select = false, single = false}) => ({
    width: '100%',
    borderRadius: '15px',
    backgroundColor: select ? '#C7C7C733' : 'transparent',
    padding: single ? '10px 0px 10px 15px' : '10px 0px 10px 44px',
    margin: '2px 0px',
    cursor: 'pointer',

    'span': {
        color: select ? 'white' : 'rgba(255, 255, 255, 0.5)'
    }
}))

const CustomDivider = styled(Box)({
    width: '100%',
    height: '2px',
    background: 'rgb(255,255,255)',
    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
    opacity: '20%'
})

const CustomDrawer = ({ drawerWidth }) => {

    const router = useRouter()
    const pathName = usePathname();

    return (
        <Drawer 
            variant='permanent'
            anchor='left'
            open
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    border: 'none',
                    width: drawerWidth
                }
            }}
        >
            <CardContainer>
                <Grid container alignItems={'center'} marginBottom={'20px'} >
                    <Grid item xs={10}>
                        <Typography variant='h4' color={'white'} >Pleizt Chat</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton>
                            <IconBurger/>
                        </IconButton>
                    </Grid>
                </Grid>

                <List>
                    {
                        DrawerRoutes?.map((item, index) => (
                            <>
                                <ListItem key={`${index}-title`}>
                                    <ItemRoute
                                        onClick={() => item?.route && router.push(item?.route)}
                                        select={item?.route && pathName == item?.route}
                                        single
                                    >
                                        <Grid container alignItems={'center'}>
                                            <Grid item xs={2}>
                                                {item?.icon}
                                            </Grid>
                                            
                                            <Grid item xs={item?.routes ? 9 : 10}>
                                                <Typography variant='supralabel' color={'white'} >{item.title}</Typography>
                                            </Grid>

                                            {
                                                item?.routes &&
                                                <Grid item xs={1} >
                                                    <IconChevronDown />
                                                </Grid>
                                            }
                                        </Grid>
                                    </ItemRoute>
                                </ListItem>
            
                                {
                                    item?.routes &&
                                    item?.routes.map((route) => (
                                        <ListItem key={route.link} >
                                            <ItemRoute 
                                                onClick={() => router.push(route.link)}
                                                select={pathName == route.link}
                                            >
                                                <Typography  variant='supralabel' >{route.title}</Typography>
                                            </ItemRoute>
                                        </ListItem>
                                    ))
                                }
            
                                {/* <ListItem key={`${index}-divider`}>
                                    <CustomDivider />
                                </ListItem>        */}
                            </>
                        ))
                    }
                </List>
            </CardContainer>
        </Drawer>
    )
}

export default CustomDrawer