import { useEffect, useState } from "react";
import useMobileLayout from "./useMobileLayout";

export function useMediaQuery(query: string) {

    const [match , setMatch] = useState(window.matchMedia(query).matches);
    const dimension = useMobileLayout();

    useEffect(() => {
        setMatch(window.matchMedia(query).matches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dimension])

    return match;
}