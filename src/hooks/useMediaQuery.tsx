import * as React from "react"

const BREAKPOINTS = {
    desktop: 1280,
    tablet: 1024,
    mobile: 768,
}

export function useMediaQuery() {
    const [breakpoint, setBreakpoint] = React.useState<number | undefined>(undefined)

    React.useEffect(() => {
        const getBreakpoint = () => {
            const width = window.innerWidth
            if (width <= BREAKPOINTS.mobile) return BREAKPOINTS.mobile
            if (width <= BREAKPOINTS.tablet) return BREAKPOINTS.tablet
            if (width <= BREAKPOINTS.desktop) return BREAKPOINTS.desktop
            return width
        }

        const onChange = () => {
            setBreakpoint(getBreakpoint())
        }

        window.addEventListener("resize", onChange)
        setBreakpoint(getBreakpoint())

        return () => window.removeEventListener("resize", onChange)
    }, [])

    return breakpoint
}