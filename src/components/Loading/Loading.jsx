import ClipLoader from "react-spinners/ClipLoader";


const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <ClipLoader size={120} color="red"></ClipLoader>
        </div>
    );
};

export default Loading;