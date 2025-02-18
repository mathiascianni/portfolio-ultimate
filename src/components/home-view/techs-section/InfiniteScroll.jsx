import { technologies } from "../../../constants";

const InfiniteScroll = () => {
    return (
        <div className="relative py-4 pt-16 w-full overflow-x-hidden whitespace-nowrap">
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                {[...technologies, ...technologies].map((tech, index) => (
                    <span key={index} className="flex justify-center items-center gap-2 mx-6 text-lg gro">
                        <div className="group relative">
                            <div className="bottom-full left-1/2 absolute bg-secondary opacity-0 group-hover:opacity-100 mb-2 px-2 py-1 rounded text-primary whitespace-nowrap transition-opacity -translate-x-1/2">
                                {tech.name}
                                <div className="bottom-[-6px] left-1/2 absolute border-t-[6px] border-t-secondary border-r-[6px] border-r-transparent border-l-[6px] border-l-transparent w-0 h-0 -translate-x-1/2"></div>
                            </div>
                            <img src={`/icons/${tech.icon}.svg`} alt={tech.name} />
                        </div>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;
