import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Blogcard from "../components/Blogcard";
import { Link } from "react-router-dom";


export default function Detailedview(props) {

    const { blogname, blogid } = useParams();
    const [currBlog, setCurrBlog] = useState('')
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (blogid) {
            fetchBlogs(blogid)
        }
    }, [blogid])

    function fetchBlogs(blogid) {

        const blogurl = `http://ec2-3-108-235-67.ap-south-1.compute.amazonaws.com/api/blog/${blogid}`;
        axios.get(blogurl)
            .then(res => {
                setCurrBlog(res.data.data.blog);
                setSuggestions(res.data.data.suggestions)
            }).catch(err => { console.log(err) })
    }

    let htmlString = currBlog.htmlContent;
    let isoDate = currBlog.createdAt;
    let newDate = moment.utc(isoDate).format("MMM Do, YYYY");

    return (
        <section className="detailed-blog">

            <p className="published"> <span>Published :</span> {('converted date', newDate)}</p>
            <h1 className="blog-title">{currBlog.title} </h1>
            <img className="blog-thumb" src={currBlog.thumbnailImage} alt="" />
            <div className="author-details">
                <img src={currBlog.authorImage} alt="" />
                <p>{currBlog.author}</p>

            </div>
            <p className="blog-body" dangerouslySetInnerHTML={{ __html: htmlString }}></p>


            <button className="bookssnbtn ">Book a Session</button>


            {/* RELATED BLOGS // SUGGESTIONS */}
            <div className="related-blogs">
                <h3>Related Blogs</h3>
                {
                    suggestions.map(blogs => {
                        const { _id, title, thumbnailImage, createdAt, author, path } = blogs
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
            </div>
        </section>
    )
};

