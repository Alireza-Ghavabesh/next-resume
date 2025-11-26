import { SiReact } from "react-icons/si";
import { AnimatedShinyText } from "./ui/animated-shiny-text";

type Props = {
    text: string;
    icon: React.ReactNode;
}

export function TechCard({ text, icon }: Props) {
    return (
        <>
            <div className="flex items-center flex-wrap gap-2 border hover:border-[#33deed]/50 w-fit duration-500 rounded px-2 py-1 select-none backdrop-blur-2xl">
                {icon}
                <AnimatedShinyText className="text-secondary" shimmerWidth={10}>
                    {text}
                </AnimatedShinyText>
            </div>
        </>
    )
}