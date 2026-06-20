import { useEffect, useState } from "react";

const text = "I'm Miles. I build things across AI, products, and a few categories that don't really have a name — including, yes, a plate of fried bugs. The common thread: I see a problem, I want to make something. Looks messy. It's all on purpose.";

export default function TypewriterText() {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayed(text.slice(0, i + 1));
                i++;
            } else {
                setDone(true);
                clearInterval(interval);
            }
        }, 18);
        return () => clearInterval(interval);
    }, []);

    return (
        <p className="text-zinc-400 text-sm sm:text-base text-left leading-relaxed max-w-sm lg:max-w-[650px]">
            {displayed}
            {!done && <span className="inline-block w-0.5 h-4 bg-zinc-400 ml-0.5 animate-pulse align-middle" />}
        </p>
    );
}
