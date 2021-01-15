import { useMemo } from 'react'

export const usePagepath = (pathname: string) => {
    const name = useMemo(() => {

        const path = pathname.split('/')[1]
        
        const withUpperCase = path.charAt(0).toUpperCase() + path.slice(1)

        return path ? withUpperCase : 'Users'
        
    }, [pathname])

    return name
}