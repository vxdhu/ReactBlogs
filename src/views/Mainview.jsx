import { useEffect, useState } from "react";
import axios from "axios";
import Blogsview from "../components/Blogsview";
import Filternav from "../components/Filternav";
import Trendingview from "../components/Trendingview";
import Poster from "../components/Poster";

export default function Mainview() {
    const baseUrl = 'http://ec2-3-108-235-67.ap-south-1.compute.amazonaws.com/api/blog/';

    const [blogsArray, setBlogsArray] = useState([]);
    const [limit, setLimit] = useState(6)

    useEffect(function () {

        axios.post(baseUrl, {
            "page": 1,
            "limit": limit
        })
            .then(res => {
                setBlogsArray(res.data.data)
                console.log(blogsArray)
            })
            .catch(err => console.log(err));

    }, [limit])


    const addmoreBlogs = () => {
        setLimit(limit + 10)

    }


    return (
        <>
            <main>
                <Poster></Poster>
                <Filternav />
                <div className="grid-container">
                    <Blogsview blogs={blogsArray} addMoreBlogs={addmoreBlogs} />
                    <Trendingview></Trendingview>
                </div>
            </main>
        </>
    )
};