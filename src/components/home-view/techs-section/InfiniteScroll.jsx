import { technologies } from "../../../constants";

const InfiniteScroll = () => {
    return (
        <div className="relative py-4 w-full overflow-hidden whitespace-nowrap">
            <div className="flex w-max animate-scroll">
                {[...technologies, ...technologies].map((tech, index) => (
                    <span key={index} className="flex justify-center items-center gap-2 mx-6 text-lg">
                        <img src={`/icons/${tech.icon}.svg`} alt={tech.name} />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;
