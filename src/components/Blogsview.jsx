import Blogcard from "./Blogcard"
import "../css/blogs.css"
import { Link } from "react-router-dom";





export default function Blogsview(props) {

    const blogs = props.blogs



    return (<section className="blogs-container">
        {
            blogs.map(blogs => {
                const { _id, title, thumbnailImage, createdAt, author,path } = blogs
                return (
                    <Link className="blogcard" key={_id} to={`/blogs/${path}/${_id}/`}>
                        <Blogcard
                            title={title}
                            thumbnail={thumbnailImage}
                            created={createdAt}
                            author={author} />
                    </Link>
                )
            })

        }
        <button className="loadmorebtn" onClick={()=>{props.addMoreBlogs(); console.log('clicked')}}>Load More</button>

    </section>);
}; 