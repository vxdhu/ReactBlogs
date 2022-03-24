// import axios from "axios";
import Trendingcard from "./Trendingcard";


export default function Trendingview() {

    // FOR API HANDLING --TRENDING BLOGS

    // const baseUrl = '';
    // const [trending, setTrending] = useState([]);

    // useEffect(function(){
    //      axios.post(baseUrl,  {
    //         "page" : 1,
    //         "limit" : 10

    //     })
    //     .then(res => setTrending(res.data.data))
    //     .catch(err => console.log(err))
    // },[])



    return <section className="trendingcard-container">
        <h2>Trending Blogs</h2>
        <Trendingcard title = "What is Better for Weight Loss: Rice or Roti What?" index = '01' created = 'Feb 21 , 2021 '/>
        <Trendingcard title = "What is Better for Weight Loss: Rice or Roti What?" index = '01' created = 'Feb 21 , 2021 '/>
        <Trendingcard title = "What is Better for Weight Loss: Rice or Roti What?" index = '01' created = 'Feb 21 , 2021 '/>
        

        {/* {
                    trending.map(trending => {
                        return <Blogcard key={blogs._id} title = {trending.title}  created = {trending.createdAt} index = {trending.index}  />
                    } )
                } */}



    </section>
}