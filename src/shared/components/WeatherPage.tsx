import React, { useEffect, useState } from 'react'

import {
    Box,
    HStack,
    VStack,
    FormControl,
    Input,
    Button,
    Image,
    Heading,
    Text,
} from '@chakra-ui/react'

import snowIcon from '../icons/snowfall.png'

function WeatherPage() {
    const [location, setLocation] = useState<LocationData | null>(null)
    const [weather, setWeather] = useState()
    const [locationInputValue, setLocationInputValue] = useState('')
    
    const handleLocationInputChange = (e: React.BaseSyntheticEvent) => {
        const {value} = e.target;
        setLocationInputValue(value)
    }

    const fetchWeather = async (e?: React.BaseSyntheticEvent) => {
        e?.preventDefault()

        const city = encodeURIComponent(location?.city as string)
        const regionCode = encodeURIComponent(location?.regionCode as string)

        // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${regionCode}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ed4301f7e8297fb27910d5fea27d4320`
        
        try {
            const response = await fetch(apiUrl)
            const result = await response.json()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        async function userLocationDataWrapper() {
            const userLocationData = await getUserLocationData()
            if (userLocationData) {
                setLocation(userLocationData)
                setLocationInputValue(userLocationData.city)
            } 
        }
        userLocationDataWrapper()
    }, [])

    useEffect(() => {
        if (location) {
            fetchWeather()
        }
    }, [location]) // eslint-disable-line


    return (
        <Box>
            <form onSubmit={fetchWeather}>
                <FormControl>
                    <HStack>
                        <Input type="search" placeholder="Enter location" value={locationInputValue} onChange={handleLocationInputChange} />
                        <Button type="submit" variant={"primary"} ml="20px" px="25px">Submit</Button>
                    </HStack>
                </FormControl>
            </form>

            <VStack flexDir="column" alignItems="center" spacing={8} border="1px solid" borderColor="gray.200" boxShadow={'base'} p={10} mt="50px">
                <Box>
                    <Image src={snowIcon} w="75px" />
                </Box>
                <Box>
                    <Heading size="3xl">-6&deg;c</Heading>
                </Box>
                <Box>
                    <Text>St. John's, NL</Text>
                    <Text>Dec 16, 2021</Text>
                </Box>
            </VStack>
        </Box>
    )
}

async function getUserLocationData(): Promise<LocationData | undefined> {
    try {
        const response = await fetch(process.env.REACT_APP_LOCATION_API_URL as string)
        const result = await response.json()
        if (response.ok) {
            return {
                city: result.city,
                regionCode: result.region_code,
                countryFlagIcon: result.location.country_flag,
                countryName: result.country_name,
                currentTime: result.time_zone.current_time
            }
        }
    } catch (error) {
        console.log(error)
    }
}

interface LocationData {
    city: string
    regionCode: string
    countryFlagIcon: string
    countryName: string,
    currentTime: string
}

export default WeatherPage
