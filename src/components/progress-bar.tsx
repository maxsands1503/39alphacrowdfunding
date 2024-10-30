const ProgressBar = ({progressPercent}: {progressPercent: number}) => {
    return (
        <>
            <div className="m-20">
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-700 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{width: `${progressPercent}%`}}> {progressPercent}% </div>
                </div>
            </div>
        </>
    );


}

export default ProgressBar;