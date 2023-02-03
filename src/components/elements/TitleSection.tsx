import { ReactNode } from "react";

type TitleSectionProps = {
    children: ReactNode;
}

const TitleSection = ({ children }: TitleSectionProps) => {
    return (
        <h1 className="font-poppins text-3xl text-white-100 font-medium mb-10 flex items-center gap-2 before:w-4 before:h-1 before:bg-blue-100 before:inline-block before:rounded">
            { children }
        </h1>
    )
}

export default TitleSection;