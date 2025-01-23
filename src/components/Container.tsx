interface ContainerProps {
    children: React.ReactNode;
    classes?: string;
}

export default function Container({ children, classes }: ContainerProps) {
    return (
        <div className={`w-full max-w-[800px] mx-auto px-5 ${classes}`}>
            {children}
        </div>
    );
};