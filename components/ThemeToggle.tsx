'use client'
import {Button} from 'antd'
import {FaRegMoon, FaSun} from 'react-icons/fa'
import {useContext} from 'react'
import {ThemeContext} from '@/utils/ThemeProvider'

export default function ThemeToggle() {
    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext)

    return (
        <Button type='primary' onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? (
                <FaRegMoon />
            ) : (
                <FaSun />
            )}
        </Button>
    )
}