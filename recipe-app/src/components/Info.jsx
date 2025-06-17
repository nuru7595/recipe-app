export default function Info() {
    const info = [
        {
            key: "Started:",
            value: "16 June 2025",
        },
        {
            key: "Last Updated:",
            value: "17 June 2025",
        },
        {
            key: "Completed in:",
            value: "1 Days",
        },
        {
            key: "Allocated Time:",
            value: "5 Hours",
        },
        {
            key: "Status:",
            value: "Completed!",
        },
    ];

    return (
        <div>
            <h3 className="text-center font-bold py-6 text-red-400">
                !! Nothing to Show, Please Search Something !!
            </h3>
            <h2 className="text-center font-bold py-2 border-y-2 border-white">
                About this Project
            </h2>
            <table className="table-fixed w-full">
                <tbody>
                    {info.map((item, index) => (
                        <tr key={index} className="border-b border-white">
                            <td>{item.key}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>Source:</td>
                        <td>
                            <a
                                href="https://youtu.be/5ZdHfJVAY-s&t=20904s"
                                target="_blank"
                                title="Youtube Video"
                                className="underline"
                            >
                                Free Code Camp
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
